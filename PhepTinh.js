class PhepTinh {
    constructor(soA, soB, tenPhepTinh) {
        this.soA = soA;
        this.soB = soB;
        this.tenPhepTinh = tenPhepTinh;
    }

    getResultString() {
        const kq = this.getResult();
        switch (this.tenPhepTinh) {
            case 'CONG': return `${this.soA} + ${this.soB} = ${kq}`;
            case 'TRU': return `${this.soA} - ${this.soB} = ${kq}`;
            case 'NHAN': return `${this.soA} * ${this.soB} = ${kq}`;
            default: return `${this.soA} / ${this.soB} = ${kq}`;
        }
    }

    getResult() {
        switch (this.tenPhepTinh) {
            case 'CONG': return +this.soA + +this.soB;
            case 'TRU': return this.soA - this.soB;
            case 'NHAN': return this.soA * this.soB;
            default: return this.soA / this.soB;
        }
    }
}

module.exports = PhepTinh;
