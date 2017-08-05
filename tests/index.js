import test from 'ava';
import {
	projectPatternOnPath,
	asRatioToPathLength,
	computeSegmentHeading,
} from '../src/utils.js';

test('asRatioToPathLength returns the value if it is already a ratio', t => {
	t.true(asRatioToPathLength({ value: 0, isInPixels: false }, 666) === 0);
	t.true(asRatioToPathLength({ value: 1, isInPixels: false }, 666) === 1);
	t.true(asRatioToPathLength({ value: 0.5, isInPixels: false }, 666) === 0.5);
})

test('asRatioToPathLength computes the ratio if the value is in pixels', t => {
	t.true(asRatioToPathLength({ value: 0, isInPixels: true }, 666) === 0);
	t.true(asRatioToPathLength({ value: 666, isInPixels: true }, 666) === 1);
	t.true(asRatioToPathLength({ value: 333, isInPixels: true }, 666) === 0.5);
});

test('computeSegmentHeading', t => {
	const A = { x: 0, y: 0 };
	const B = { x: 1, y: 0 };
	const C = { x: 1, y: 1 };
	const D = { x: 0, y: 1 };

	t.true(computeSegmentHeading(A, B) === 90);
	t.true(computeSegmentHeading(A, C) === 135);
	t.true(computeSegmentHeading(A, D) === 180);
	t.true(computeSegmentHeading(B, A) === 270);
	t.true(computeSegmentHeading(B, D) === 225);
	t.true(computeSegmentHeading(C, A) === -45);
});
