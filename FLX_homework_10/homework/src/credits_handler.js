function userCard(value) {
    let balance = 100;
    let transactionLimit = 100;
    const historyLogs = [];
    const tax = 0.005;
    let key = value;

    let historyBox = (text, balance) => {
        return historyLogs.push({
            operationType: text,
            credits: balance,
            operationTime: new Date().toLocaleString('en-GB')
        });
    }
    let getCardOptions = () => {
        return {
            key,
            balance,
            transactionLimit,
            historyLogs
        };
    };
    let putCredits = (credit) => {
        const text = `Received credits`;
        balance += credit;
        historyBox(text, balance);
    };
    let takeCredits = (credit) => {
        const text = `Withdrawal of credits`;
        if (balance > credit && transactionLimit > credit) {
            balance -= credit;
            historyBox(text, balance);
        } else {
            console.error(`Sorry, but you can't do that. Your credit limit: ${transactionLimit}`);
        }
    };
    let setTransactionLimit = (limit) => {
        const text = `Transaction limit change`;
        transactionLimit = limit;
        historyBox(text, limit);
    };
    let transferCredits = (value, card) => {
        let credits = value + tax * value;

        if (balance >= credits && transactionLimit >= credits) {
            this.takeCredits(credits);
            card.putCredits(value);
        } else {
            console.error(`Sorry, but you can't do that. Your credit limit: ${transactionLimit}`);
        }
    };
    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    };
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.maxCards = 3;
    }

    addCard() {
        if (this.maxCards > this.cards.length) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.error(`you have exceeded the limit`);
        }
    }

    getCardByKey(key) {
        return this.cards[key - 1];
    }
}