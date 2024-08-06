
// Position is a concept of relatively, always defined with
// a start and now point in a spectrum.
export class Position{
    private start: number;
    private terminal: number;
    public mid: number;

    constructor(start: number, terminal: number){
        this.start = start;
        this.terminal = terminal;
        this.mid = (terminal - start) / 2 
    }

    /**
     * @returns start value set at object initialisation
     */
    get getStart(){
        return this.start;
    }

    /**
     * @returns terminal value set at object initialisation
     */
    get getTerminal(){
        return this.terminal;
    }

    /**
     * Set a new start point
     * @param newStar is a new start value
     * @return never
     */
    set newStart(newStart: number){
        this.start = newStart;
    }

    /**
     * Set a new terminal point
     * @param newTerminal is a new terminal value
     * @returns never 
     */
    set newTerminal(newTerminal: number){
        this.terminal = newTerminal;
    }
}