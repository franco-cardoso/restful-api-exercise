const isPrime = (n) => {
    if (n < 2) return false;
    let isPrime = true;
    for (let i = 2, r = Math.sqrt(n); i <= r; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
};

const getFibSequence = (req, res) => {
    function fib(n: number): number[] | string {
        // prettier-ignore
        if (n < 1) { res.status(400); return "Error 400: El valor ingresado debe ser mayor a 0"; }
        // prettier-ignore
        else if (isNaN(n)) { res.status(400); return "Error 400: El valor ingresado debe ser un número"; }

        if (req.query.prime) {
            let sequence = [0, 1];
            let sequencePrimes = [];
            for (let i = 2; sequencePrimes.length < n; i++) {
                sequence[i] = sequence[i - 1] + sequence[i - 2];
                if (isPrime(sequence[i])) {
                    sequencePrimes.push(sequence[i]);
                }
            }
            return sequencePrimes;
        } else {
            let sequence = [0, 1];
            for (let i = 2; i < n; i++) {
                sequence[i] = sequence[i - 1] + sequence[i - 2];
            }
            return sequence;
        }
    }
    res.send(fib(req.query.amount ? req.query.amount : 20));
};

const getExponentsTable = (req, res) => {
    // prettier-ignore
    function calcExponents(maxNum: number, maxExp: number): { [key: number]: number } {
        let exponents = {};
        for (let i = 1; i <= maxNum; i++) {
            exponents[i] = [];
            for (let j = 0; j <= maxExp; j++) {
                exponents[i].push(i ** j);
            }
        }
        // console.table(exponents)
        return exponents;
    }
    res.send(calcExponents(req.query.maxNum, req.query.maxExp));
};

export { getFibSequence, getExponentsTable };
