export class chainingData {
    
    static programName = "";
    static batchName = "";
    static className = "";
 
    //Setters
    static setProgramName(name) {
        this.programName = name;
        return this; 
    }

    static setBatchName(name) {
        this.batchName = name;
        return this;
    }

    static setClassName(name) {
        this.className = name;
        return this;
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