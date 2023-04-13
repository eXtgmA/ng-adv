import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldDefaultOptions,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MaterialModule } from '../material.module';
import { MdRendererModule } from '../shared/markdown-renderer/md-renderer.module';
import { SharedModule } from '../shared/shared.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoRoutingModule } from './demo.routing.module';
import { ActionStreamsComponent } from './samples/action-streams/action-streams.component';
import { BootstrapStandaloneComponent } from './samples/bootstrap-standalone/bootstrap-standalone.component';
import { ReactiveCascadeComponent } from './samples/cascade/reactive-cascade.component';
import { ContentChildComponent } from './samples/content-child/content-child.component';
import { ProjectorComponent } from './samples/content-child/projector/projector.component';
import { ControlValueAccessorComponent } from './samples/control-value-accessor/control-value-accessor.component';
import { NumberPickerComponent } from './samples/control-value-accessor/number-picker/number-picker.component';
import { BoxedDirective } from './samples/directive-composition/boxed.directive';
import { DirectiveCompositionComponent } from './samples/directive-composition/directive-composition.component';
import { ErrStateMatcherComponent } from './samples/err-state-matcher/err-state-matcher.component';
import { ReactiveExplicitTypedExternalComponent } from './samples/explicit-typed-external/reactive-explicit-typed-external.component';
import { ReactiveExplicitTypedComponent } from './samples/explicit-typed/reactive-explicit-typed.component';
import { FormArrayComponent } from './samples/form-array/form-array.component';
import { FormControlComponent } from './samples/form-control/form-control.component';
import { FormErrorsComponent } from './samples/form-errors/form-errors.component';
import { FormBuilderComponent } from './samples/forms-builder/forms-builder.component';
import { GetRawValueComponent } from './samples/get-raw-value/get-raw-value.component';
import { BindingComponent } from './samples/host-binding-listener/binding/binding.component';
import { HostBindingListenerComponent } from './samples/host-binding-listener/host-binding-listener.component';
import { HoverListenerDirective } from './samples/host-binding-listener/hover-listener.directive';
import { ReactiveNestedComponent } from './samples/nested-objects/reactive-nested.component';
import { ReactiveFormsComponent } from './samples/reactive-forms/reactive-forms.component';
import { ReactiveValidationComponent } from './samples/state-validators/reactive-validation.component';
import { ClockComponent } from './samples/template-vs-container/clock/clock.component';
import { ExpanderComponent } from './samples/template-vs-container/expander-content/expander.component';
import { ExpanderTemplateComponent } from './samples/template-vs-container/expander-template/expander-template.component';
import { TemplateVsContainerComponent } from './samples/template-vs-container/template-vs-container.component';
import { TypedNonnullableComponent } from './samples/typed-nonnullable/typed-nonnullable.component';
import { ReactiveTypedComponent } from './samples/typed/reactive-typed.component';
import { ReactiveTypedValidatonComponent } from './samples/validaton-intro/reactive-typed-validaton.component';
import { ViewChildComponent } from './samples/view-child/view-child.component';
import { ContentProjectionComponent } from './samples/content-projection/content-projection.component';
import { uxSplitComponent } from './samples/content-projection/ux-split/ux-split.component';
import { uxButtonComponent } from './samples/content-projection/ux-button/ux-button.component';
import { SplitPopupComponent } from './samples/content-projection/split-popup/split-popup.component';


const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline',
};

@NgModule({
  declarations: [
    DemoContainerComponent,
    ReactiveFormsComponent,
    FormBuilderComponent,
    ContentProjectionComponent,
    FormControlComponent,
    FormArrayComponent,
    ReactiveValidationComponent,
    ReactiveCascadeComponent,
    ActionStreamsComponent,
    ReactiveNestedComponent,
    ControlValueAccessorComponent,
    NumberPickerComponent,
    ReactiveTypedComponent,
    TypedNonnullableComponent,
    ReactiveExplicitTypedComponent,
    GetRawValueComponent,
    ReactiveExplicitTypedExternalComponent,
    BootstrapStandaloneComponent,
    HostBindingListenerComponent,
    TemplateVsContainerComponent,
    ViewChildComponent,
    ContentChildComponent,
    ExpanderComponent,
    ClockComponent,
    ExpanderTemplateComponent,
    BindingComponent,
    HoverListenerDirective,
    ProjectorComponent,
    ReactiveTypedValidatonComponent,
    FormErrorsComponent,
    ErrStateMatcherComponent,
    DirectiveCompositionComponent,
    BoxedDirective,
    uxSplitComponent,
    uxButtonComponent,
    SplitPopupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DemoRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    MdRendererModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance,
    },
  ],
})
export class DemosModule { }
