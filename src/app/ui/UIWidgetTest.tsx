import Widget from "@arcgis/core/widgets/Widget";
import { tsx } from "@arcgis/core/widgets/support/widget";
import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";


@subclass("Landing.ui.UIWidgetTest")
export default class UIWidgetTest extends Widget {

	constructor(args) {
		super(args);
	}

	render() {

		return (
			<div>
				<span>UI Widget Test</span>
				<span>UI Widget Test2</span>
				<span>UI Widget Test3</span>
				<span>UI Widget Test4</span>
				<span>UI Widget Test5</span>
			</div>
		);
	}



}