const TEST_COUNT = 2;

let text =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt cum labore ducimus, nam quasi ut in dignissimos reprehenderit iusto autem mollitia odio eaque molestias commodi inventore. Consectetur expedita odio quisquam rerum nobis, reprehenderit eligendi eveniet repudiandae, sed ea aut porro! Nisi eveniet ad sint accusantium natus placeat aliquam nihil ratione.";

/*
 ** TEST A
 */
console.log("TEST A:");
function stackTestA(numb) {
  try {
    return stackTestA(numb + 1);
  } catch (e) {
    return numb;
  }
}

for (let i = 0; i < TEST_COUNT; i++)
    console.log(stackTestA(1));

/*
 ** TEST B
 */
console.log("\nTEST B:");
function stackTestB(numb) {
  try {
    let a = [];
    for (let i = 0; i < 100; i++)
        a.push(text);
    return stackTestB(numb + 1);
  } catch (e) {
    return numb;
  }
}

for (let i = 0; i < TEST_COUNT; i++)
    console.log(stackTestB(1));

/*
 ** TEST C
 */
console.log("\nTEST C:");
function stackTestC(numb) {
  try {
    let b = [];
    for (let i = 0; i < 100; i++)
        b.push(Math.random() * 10);
    return stackTestC(numb + 1);
  } catch (e) {
    return numb;
  }
}

for (let i = 0; i < TEST_COUNT; i++)
    console.log(stackTestC(1));

/*
 ** TEST D
 */
console.log('\nTEST D:')
function stackTestD(n) {
  try {
    if (n <= 0) return 1
    return stackTestD(n - 1) + stackTestD(n - 1)
  } catch {
    console.log('Stack is full: ', n)
  }
}

for (let i = 0; i < TEST_COUNT; i++)
  console.log(stackTestD(5000))
