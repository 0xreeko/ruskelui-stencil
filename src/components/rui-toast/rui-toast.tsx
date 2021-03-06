import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: "rui-toast",
    styleUrl: "rui-toast.css",
    shadow: true
})

export class RuiToast {
    @Prop() label?: string;

    render() {
        return (
            <div class="bg-amber-200 flex items-center text-amber-500 duration-300 hover:text-amber-400 select-none w-fit h-6 px-2 py-1 text-[11.1px] rounded-md">
                {this.label}
            </div>
        );
    }
}