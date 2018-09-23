import { NgModule } from '@angular/core'
import { IonicModule } from 'ionic-angular'

import { AutherOneComponent } from './auther-one/auther-one'
import { MaydayEmergencyMaterialComponent } from './mayday-emergency-material/mayday-emergency-material'
@NgModule({
	declarations: [
		AutherOneComponent,
		MaydayEmergencyMaterialComponent
	],
	imports: [
		// CommonModule,  // <-- standard Angular module
    IonicModule    // <-- standard ionic module
	],
	exports: [
		AutherOneComponent,
		MaydayEmergencyMaterialComponent
	]
})
export class ComponentsModule {}
