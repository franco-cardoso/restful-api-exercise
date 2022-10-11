const getFibSequence = (req, res) => {
    function fib(n: number): number[] | string {
        // prettier-ignore
        if (n < 1) { res.status(400); return "Error 400: El valor ingresado debe ser mayor a 0"; }
        // prettier-ignore
        if (isNaN(n)) { res.status(400); return "Error 400: El valor ingresado debe ser un número"; }

        let sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence[i] = sequence[i - 1] + sequence[i - 2];
        }
        return sequence;
    }
    res.send(fib(req.body.num ? req.body.num : 20));
};

export { getFibSequence };
