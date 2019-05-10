import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonToggleModule,
  MatProgressBarModule,
  MatChipsModule,
  MatCardModule,
  MatInputModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatTabsModule, MatDialogModule, MatExpansionModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatChipsModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule
  ], exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatChipsModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
  ]
})
export class MaterialModule {
}
