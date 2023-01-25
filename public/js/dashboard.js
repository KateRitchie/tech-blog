const newFormHandler = async (event) => {
	event.preventDefault();

	const title = document.querySelector('#postTitle').value.trim();

	const description = document.querySelector('#postDesc').value.trim();

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
	.querySelector('.newPost')
	.addEventListener('submit', newFormHandler);

document
	.querySelector('.postList')
	.addEventListener('click', delButtonHandler);