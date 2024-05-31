export * from './brand-controller.service';
import { BrandControllerService } from './brand-controller.service';
export * from './brand-controller.serviceInterface';
export * from './car-controller.service';
import { CarControllerService } from './car-controller.service';
export * from './car-controller.serviceInterface';
export * from './fuel-type-controller.service';
import { FuelTypeControllerService } from './fuel-type-controller.service';
export * from './fuel-type-controller.serviceInterface';
export * from './model-controller.service';
import { ModelControllerService } from './model-controller.service';
export * from './model-controller.serviceInterface';
export * from './transmission-type-controller.service';
import { TransmissionTypeControllerService } from './transmission-type-controller.service';
export * from './transmission-type-controller.serviceInterface';
export const APIS = [BrandControllerService, CarControllerService, FuelTypeControllerService, ModelControllerService, TransmissionTypeControllerService];
