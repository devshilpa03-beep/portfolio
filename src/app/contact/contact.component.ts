import {Component, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, Validators, FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

/**
 * ContactComponent
 * - Standalone component implementing a reactive contact form with client-side
 *   validation and a success state. Uses RxJS (via HttpClient) for async POST.
 * - Designed to be embedded inside a modal or page section.
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  private http = inject(HttpClient);

  // Strongly-typed form controls using FormControl generics and non-nullable
  // controls to enforce strict typing throughout the component.
  form = new FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    message: FormControl<string>;
  }>({
    name: new FormControl<string>('', {nonNullable: true, validators: [Validators.required, Validators.minLength(2)]}),
    email: new FormControl<string>('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
    message: new FormControl<string>('', {nonNullable: true, validators: [Validators.required, Validators.minLength(10)]})
  });

  // Local UI state via signals
  submitting = signal(false);
  success = signal(false);
  error = signal<string | null>(null);

  // Convenience getters for template binding (strongly typed)
  get f() { return this.form.controls; }

  /** Submit handler — posts the form to a (mock) endpoint. */
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // Prefer mailto fallback so contact works without a backend.
    this.submitting.set(true);
    this.error.set(null);

    const { name, email, message } = this.form.value as { name: string; email: string; message: string };
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailto = `mailto:shilpasivan2000@gmail.com?subject=${subject}&body=${body}`;

    try {
      window.location.href = mailto;
      this.success.set(true);
      this.form.reset();
    } catch (err) {
      this.error.set('Unable to open mail client. Please email shilpasivan2000@gmail.com');
      console.error(err);
    } finally {
      this.submitting.set(false);
    }
  }
}
