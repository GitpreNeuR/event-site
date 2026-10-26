import { coreServices, processes, serviceGroups } from "@/data/services";
import { birthdayServices } from "@/data/birthday-services";
import type { ProcessStep, Service, ServiceGroup } from "@/types/service";

export const allServices: Service[] = [...coreServices, ...birthdayServices];

const bySlug = new Map(allServices.map((service) => [service.slug, service]));

export function getServiceBySlug(slug: string): Service | null {
  return bySlug.get(slug) ?? null;
}

export function getServicesBySlugs(slugs: readonly string[] = []): Service[] {
  return slugs.map((slug) => bySlug.get(slug)).filter((service): service is Service => Boolean(service));
}

export function getServicesByGroup(group: ServiceGroup): Service[] {
  return allServices.filter((service) => service.group === group);
}

export function getProcess(service: Service): ProcessStep[] {
  return processes[service.processKey];
}

export function getGroupLabel(group: ServiceGroup): string {
  return serviceGroups[group].label;
}

export { coreServices, birthdayServices };
