import  {compute} from './compute';

// describe() // defines a suite
// it() //defines a test
describe('compute', () => {
    // body of test
    it('should return 0 if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });

    it('should return 0 if input is negative', () => {
        const result = compute(2);
        expect(result).toBe(3);
    });
});
