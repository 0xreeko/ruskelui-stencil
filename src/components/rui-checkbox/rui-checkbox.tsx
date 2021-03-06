import { Component, Fragment, h, Prop } from "@stencil/core";

@Component({
    tag: "rui-checkbox",
    styleUrl: "rui-checkbox.css",
    scoped: false
})

export class RuiCheckbox {
    @Prop() colour: string = "#0c0cff";
    @Prop() name: string;
    @Prop() labelBefore?: boolean;
    @Prop() labelAfter?: boolean;

    componentDidUpdate() {
        this.colour = this.colour.length > 0 ? this.colour : "0c0cff";
    }

    render() {
        
        return (
            <div class="m-0.5 block">
            <label id={`checkbox-${this.name}`} class="flex flex-row-reverse w-fit h-fit">
                {this.labelBefore === true ? (
                    <Fragment>
                        <div class="cbox relative flex items-center">
                            <input type="checkbox" class={`peer appearance-none outline-none w-5 h-5 focus:outline-none ease-linear transition-all checked:bg-[#${this.colour}] bg-sylver-700 rounded-md`} />
                            <svg class="absolute w-5 h-5 text-sylver-50 scale-0 peer-checked:scale-75 ease-linear transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span class="mr-2 select-none"><slot></slot></span>
                    </Fragment>
                ) : (
                    <Fragment>
                        <span class="ml-2 select-none"><slot></slot></span>
                        <div class="cbox relative flex items-center">
                            <input type="checkbox" class={`peer appearance-none outline-none w-5 h-5 focus:outline-none ease-linear transition-all checked:bg-[#${this.colour}] bg-sylver-700 rounded-md`} />
                            <svg class="absolute w-5 h-5 text-sylver-50 scale-0 peer-checked:scale-75 ease-linear transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                    </Fragment>
                )}
            </label>
            </div>
        );
    }
}