import Widget from "@arcgis/core/widgets/Widget";
import { tsx } from "@arcgis/core/widgets/support/widget";
import { subclass } from "@arcgis/core/core/accessorSupport/decorators";
import InstantAppLanding from './ui/InstantAppLanding';



@subclass("Landing.App")
export default class App extends Widget {
  constructor(args) {
    super(args);
  }

  postInitialize() {
    setTimeout(()=>{
      console.log("THIS.INIT FIRED");
      this.init();
    }, 5000)
  }

  render() {
    return (
      <div id="instant-app-landing"></div>
    );
  }

  private async init() {
    
    new InstantAppLanding({
      container: "instant-app-landing"
    })
  }


}