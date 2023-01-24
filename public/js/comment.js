// JS for the comments under the blog post
const commentFormHandler = async function (event) {
	event.preventDefault();

	const post_id = document.querySelector('.new-comment-form').dataset.post;

	const comment_description = document.querySelector('#comment_description').value.trim();

	if (comment_description) {
		await fetch('/api/comment', {
			method: 'POST',
			body: JSON.stringify({
				post_id,
				comment_description,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.ok) {
			document.location.reload();
		} else {
			alert('Failed comment');
		}
	}
	
};

document
	.querySelector('.new-comment-form')
	.addEventListener('submit', commentFormHandler);