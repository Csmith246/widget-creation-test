import Widget from "@arcgis/core/widgets/Widget";
import { tsx } from "@arcgis/core/widgets/support/widget";
import { subclass } from "@arcgis/core/core/accessorSupport/decorators";
import InstantAppLanding from './ui/InstantAppLanding';



@subclass("Landing.App")
export default class App extends Widget {
  constructor(args) {
    super(args);
  }

  render() {
    return (
      <div id="instant-app-landing" afterCreate={this.init.bind(this)}></div>
    );
  }

  private init(dom:any) {
    
    new InstantAppLanding({
      container: dom
    })
  }


}