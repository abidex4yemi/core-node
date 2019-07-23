console.log('Before');
getUser(4, ({ id, gitHub }) => {
	if (gitHub) {
		setTimeout(() => {
			console.log(getRepository());
		}, 2000);
	}
});
console.log('After');

function getUser(id, callback) {
	setTimeout(() => {
		console.log('this is asynchronous imitation');
		callback({ id, gitHub: 'abidex4yemi' });
	}, 1000);
}

function getRepository() {
	return ['repo1', 'repo2', 'repo3'];
}
