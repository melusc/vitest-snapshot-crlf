import {test, expect} from 'vitest';

test.for([
	'a\nb',
	'a\r\nb',
])('"%s".split("")', (input) => {
	expect(input.split("")).toMatchSnapshot();
})
