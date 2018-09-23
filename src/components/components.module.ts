import { NgModule } from '@angular/core'
import { IonicModule } from 'ionic-angular'

import { AutherOneComponent } from './auther-one/auther-one'
import { MaydayEmergencyMaterialComponent } from './mayday-emergency-material/mayday-emergency-material'
import { MaydayLieuComponent } from './mayday-lieu/mayday-lieu';
import { MaydayHeaderFormComponent } from './mayday-header-form/mayday-header-form';

@NgModule({
	declarations: [
		AutherOneComponent,
		MaydayEmergencyMaterialComponent,
    MaydayLieuComponent,
    MaydayHeaderFormComponent
	],
	imports: [
		// CommonModule,  // <-- standard Angular module
    IonicModule    // <-- standard ionic module
	],
	exports: [
		AutherOneComponent,
		MaydayEmergencyMaterialComponent,
    MaydayLieuComponent,
    MaydayHeaderFormComponent
	]
})
export class ComponentsModule {}
