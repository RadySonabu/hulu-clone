import Image from "next/image";
function Thumbnail({ result }) {
	return (
		<div>
			<h1>{result.original_title}</h1>
		</div>
	);
}

export default Thumbnail;
