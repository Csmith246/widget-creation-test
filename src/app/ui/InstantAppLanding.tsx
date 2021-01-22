import Widget from "@arcgis/core/widgets/Widget";
import { tsx } from "@arcgis/core/widgets/support/widget";
import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

import UIWidgetTest from "./UIWidgetTest";

@subclass("Landing.ui.InstantAppLanding")
export default class InstantAppLanding extends Widget {

	@property()
	uiWidgetTest: UIWidgetTest;

	constructor(args) {
		super(args);
	}

	postInitialize(){
		this.uiWidgetTest = new UIWidgetTest({});
	}

	render() {
		return (
			<div>
				InstantAppLanding
				{ this.uiWidgetTest?.render() }
			</div>
		);
	}



}