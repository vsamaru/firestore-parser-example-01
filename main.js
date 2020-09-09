import { expect } from 'chai';
import firestoreParser from 'firestore-parser';

let totalPassed = 0;
const it = (msg, test) => {
	try {
		test();
		console.log('✔️', msg);
		totalPassed++;
	} catch ({ ...e }) {
		console.log('❌', msg, '\n', JSON.stringify(e, null, 2));
	}
};

const jsonA = {
	player: {
		mapValue: {
			fields: {
				name: {
					stringValue: 'steve',
				},
				health: {
					integerValue: '100',
				},
				alive: {
					booleanValue: true,
				},
			},
		},
	},
	level: {
		integerValue: '7',
	},
};

const jsonB = {
	player: {
		name: 'steve',
		health: 100,
		alive: true,
	},
	level: 7,
};

it('should have equal objects', () =>
	expect(firestoreParser(jsonA)).to.deep.equal(jsonB));

'Tests Passed: ' + totalPassed;
