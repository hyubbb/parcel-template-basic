console.log("hello parcel");

async function test() {
	// 비동기함수
	const promise = Promise.resolve(123);
	console.log(await promise);
}

test();
