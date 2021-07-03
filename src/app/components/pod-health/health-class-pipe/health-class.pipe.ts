import { Pipe, PipeTransform } from '@angular/core';
import { HealthStatus } from '../pod-health.component';

@Pipe({
  name: 'healthClass'
})
export class HealthClassPipe implements PipeTransform {

  transform(status: HealthStatus): string {
    switch (status) {
      case HealthStatus.GOOD:
        return 'positive';
      case HealthStatus.BAD:
        return 'negative';
      default:
        return '';
    }
  }
}
