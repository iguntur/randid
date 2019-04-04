import test from 'ava';
import r from '.';

test('async', async t => {
	t.is((await r()).length, 12);
	t.is((await r({length: 24})).length, 24);
	t.is((await r({length: 128})).length, 128);
	t.is((await r({length: 512})).length, 512);
});

test('sync', t => {
	t.is(r.sync().length, 12);
	t.is(r.sync({length: 24}).length, 24);
	t.is(r.sync({length: 128}).length, 128);
	t.is(r.sync({length: 512}).length, 512);
});
