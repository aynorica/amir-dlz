export default function copyToClipboard(text: string) {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			return true;
		})
		.catch((error) => {
			return false;
		});
}
