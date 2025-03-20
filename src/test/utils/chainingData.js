export class chainingData {
    static programName = "";
    static batchName = "";
    static className = "";
    // Setters
    static setProgramName(name) {
        this.programName = name;
    }
    static setBatchName(name) {
        this.batchName = name;
    }
    static setClassName(name) {
        this.className = name;
    }
    // Getters
    static getProgramName() {
        return this.programName;
    }
    static getBatchName() {
        return this.batchName;
    }
    static getClassName() {
        return this.className;
    }
}