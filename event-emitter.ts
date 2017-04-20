
export class EventEmitter
{
    private events:  { [name: string]: Array<(...args: any[]) => void> }  =  {}

    /**
    * Add an event-handler for an event name
    */
    public on(event: string, handler: (...args: any[]) => void): void
    {
        const handlers = this.events[event] = this.events[event] || [];

        handlers.push(handler);
    }

    /**
    * Add a one-time event-handler for an event name
    */
    public once(event: string, handler: (...args: any[]) => void): void
    {
        const wrapper = this.on(event, (...args) =>
        {
            handler(...args);

            const index = this.events[event].indexOf(handler)

            if (index > -1)
            {
                this.events[event].splice(index, 1)
            }
        });
    }

    /**
     * Remove one or all the handlers for an event
     *
     * @param  {string} event   [description]
     * @param  {any[]}  handler [description]
     * @return {[type]}         [description]
     */
    public off(event: string, handler: (...args: any[]) => void): void
    {
        // TODO
    }

    /**
    * Emit an event with args
    */
    public emit(event: string, ...args: any[]): void
    {
        if (this.events[event])
        {
            for (const handler of this.events[event])
            {
                handler(...args);
            }
        }
    }
}
