const newFormHandler = async (event) => {
	event.preventDefault();

	const title = document.querySelector('#post-title').value.trim();

	const description = document.querySelector('#post-desc').value.trim();

	if (title && description) {
		const response = await fetch('/api/post', {
			method: 'POST',
			body: JSON.stringify({ title, description }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed post');
		}
	}
};

const delButtonHandler = async (event) => {
	if (event.target.hasAttribute('data-id')) {
		const id = event.target.getAttribute('data-id');

		const response = await fetch(`/api/post/${id}`, {
			method: 'DELETE',
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed deletion');
		}
	}
};

document
	.querySelector('.new-post-form')
	.addEventListener('submit', newFormHandler);

document
	.querySelector('.post-list')
	.addEventListener('click', delButtonHandler);