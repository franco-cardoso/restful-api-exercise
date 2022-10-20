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
        if (req.query.prime === "true") {
            let sequence: number[] = [0, 1];
            let sequencePrimes: number[] = [];

            for (let i = 2; sequencePrimes.length < n; i++) {
                sequence[i] = sequence[i - 1] + sequence[i - 2];
                if (isPrime(sequence[i])) {
                    sequencePrimes.push(sequence[i]);
                }
            }

            return sequencePrimes;
        } else {
            let sequence: number[] = [0, 1];

            for (let i = 2; i < n; i++) {
                sequence[i] = sequence[i - 1] + sequence[i - 2];
            }

            return sequence;
        }
    }

    if (req.query.amount) {
        const { amount } = req.query;

        if (amount < 1) { res.status(400); return res.send("Error 400: El valor ingresado debe ser mayor a 0") }
        else if (isNaN(amount)) { res.status(400); return res.send("Error 400: El valor ingresado debe ser un número") }

        res.send(fib(amount));
    } else {
        res.send(fib(20))
    }
};

const getExponentsTable = (req, res) => {
    function calcExponents(n: number, ex: number): { [key: number]: number } {
        let exponents = {};
        for (let i = 1; i <= n; i++) {
            exponents[i] = [];
            for (let j = 0; j <= ex; j++) {
                exponents[i].push(i ** j);
            }
        }
        console.table(exponents)
        return exponents;
    }

    const { maxNum, maxExp } = req.query;
    res.send(calcExponents(maxNum, maxExp));
};

const getFactorial = (req, res) => {
    function factorize(n: number) {
        let arr: number[] = [1];
        let result: number = 1;

        if (num < 0) {
            for (let i = 1; i < -n; i++) {
                result *= i + 1;
                arr.push(-(i + 1));
            }
            return { nums: arr.join(" * "), result: -result };
        } else {
            for (let i = 1; i < n; i++) {
                result *= i + 1;
                arr.push(i + 1);
            }
            return { nums: arr.join(" * "), result: result };
        }
    }

    const { num } = req.query;
    const result = factorize(num);
    res.send(`${num}! = ${result.result}     (${result.nums} = ${result.result})`);
};

export { getFibSequence, getExponentsTable, getFactorial };
