const downloadCV = () => {
	if (!confirm("Download CV ?")) return;

	const data =
		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero id quod quae accusamus, ratione odit rerum nobis nam voluptas labore commodi sequi quisquam nostrum eligendi amet. Porro quia, id excepturi facere tenetur magnam praesentium suscipit minima, aperiam, qui voluptatibus optio sequi perferendis labore nulla cumque quod maxime dolorum! Pariatur a ut doloribus id! Quos modi vero adipisci perspiciatis deleniti eveniet atque quod eaque velit, aut cumque commodi unde debitis reprehenderit! Quis magnam dolore accusamus odit unde excepturi debitis nobis nulla nesciunt aliquam? Nobis velit assumenda id excepturi quidem, quis ipsum amet hic pariatur deserunt dignissimos natus nemo, fugiat libero inventore distinctio, voluptatibus qui eius praesentium dicta totam nam natus at? Omnis iste a quo laborum praesentium veritatis, repellendus ad cum labore pariatur ipsa consequuntur dolor? Blanditiis itaque asperiores et maxime!";
	const myBlob = new Blob([data], { type: "text/plain" });
	const blobUrl = URL.createObjectURL(myBlob);

	const a = document.createElement("a");

	Object.assign(a, {
		href: blobUrl,
		download: "tooj-rtn.txt",
	});

	a.style.display = "none";
	document.body.appendChild(a);

	a.click();

	document.body.removeChild(a);
	URL.revokeObjectURL(blobUrl);
};

export default downloadCV;
