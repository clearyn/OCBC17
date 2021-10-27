[Kembali ke README.md](./README.md)

# Angular Lifecycle
# Share: Angular sesi 19-21

## Note: bisa kita download dengan meng-klik icon download di menu paling kanan yaa

link slido : https://app.sli.do/event/v6ltrbud

============================================================================
SESSION 19: INTRO TO ANGULAR
============================================================================

1. install angular CLI -> npm install -g @angular/cli
2. ng new <NAMA_PROJECT>
   - routing? no
   - stylesheet? css
3. struktur:
   - src           --> source code project
     - app          -> semua components/service/modules/etc.
       - app.module    -> AppModule
     - assets       -> semua aset statis seperti gambar/video/audio/etc.
     - environments -> semua konfigurasi environment (dev/test/prod)
     - index.html   -> file utama
     - main.ts      -> file TypeScript utama
   - node_modules  --> module yang ter-install lewat NPM (Node Package Manager)
   - angular.json  --> konfigurasi angular
   - karma.conf.js --> unit testing
   - tsconfig.json --> konfigurasi typescript

============================================================================
SESSION 20: ANGULAR COMPONENTS
============================================================================

#### Membuat Component Baru

1. Dengan CLI
   - Jalankan `ng g component <NAMA_COMPONENT>`

2. Manual
  - Buat file HTML, TS (khusus component utama), dan CSS, dengan struktur nama:
    `<NAMA_COMPONENT>.component.<EXT>`
  - Pada file TS, buat struktur berikut:
    ```ts
    import { Component } from '@angular/core';

    @Component({
      selector: '<NAMA_SELECTOR>',
      templateUrl: './<NAMA_COMPONENT>.component.html',
      styleUrls: ['./<NAMA_COMPONENT>.component.css']
    })
    export class <NAMA_COMPONENT>Component {
      constructor() {}
    }
    ```
  - Pada HTML, buat struktur HTML biasa:
    ```html
    <p><NAMA_COMPONENT> bisa jalan!</p>
		```
  - Di file `app.module.ts`, import dan tambahkan file TS-nya:
    ```ts
    import {} from './<NAMA_COMPONENT>/<NAMA_COMPONENT>.component.ts';

    // ...
    @Component({

    })
    ```

#### Lempar data antara Parent dengan Child component

Kita bisa manfaatkan `@Input` dan `@Output` untuk meneruskan data apa saja yang
ingin kita share di antara kedua component.

Beda antara keduanya apa?
- `@Input` -> kita share data yang dikirim oleh parent component ke dalam child
component. Dalam contoh di atas, dari `AppComponent` ke `ButtonComponent`
- `@Output` -> kebalikan dari `@Input`, di mana kita share data yang dikirim
oleh child component ke dalam parent component.

##### Menggunakan `@Input` untuk share data: Parent -> Child

1. tambahkan satu property baru di class `AppComponent` (file:
`app.component.ts`) seperti berikut:
```ts
// app.component.ts

// ...
export class AppComponent {
  message = "Hi! I'm your parent."
}
```
2. Lakukan property binding dengan menggunakan attribute `message` yang
dibungkus dengan `[]` (kurung siku). Kemudian berikan value berupa nama property
yang sudah kita buat sebelumnya, pada tag HTML `<app-button>`, seperti contoh
berikut:
```html
<app-button [message]="message"></app-button>
```
3. Pindah ke file `button` component, kita buat property seperti langkah 1
sebelumnya. Namun, kali ini kita tambahkan `@Input` di depan nama property kita,
pada `ButtonComponent` (file: `button.component.ts`). Contoh:
```ts
// button.component.ts

// ...
export class ButtonComponent {
  @Input() message = "";
}
```
4. Setelah itu, kita render property yang kita buat tadi di file HTML
`button.component` kita. Kita gunakan kurung kumis ganda `{{}}` (disebut juga
dengan sintaks interpolation binding Angular), dengan nama property yang kita
buat sebelumnya, di dalamnya:
```html
<p>button works!</p>
<p>Incoming message: {{ message }}</p>
```

##### Menggunakan `@Output` untuk share data: Child -> Parent

Kita bisa meng-`emit` pesan yang dikirimkan oleh child component kepada parent
component di dalam Angular, dengan menggunakan directive `@Output`. Caranya
bisa kita ikuti dengan langkah berikut.

**Child Component**

1. Pada component HTML, siapkan sebuah tombol untuk melakukan trigger event.
```html
<!-- button.component.html -->
<button>Hit me</button>
```

2. Dengan tombol ini, kita bisa tambahkan sebuah event listener. Dalam hal ini,
event click kita gunakan. Untuk menambahkan event listener, kita bisa gunakan
tanda `()` (kurung biasa), yang di dalamnya kita bisa isi dengan event yang
kita inginkan -- dalam hal ini, `click`. Pada contoh ini, kita gunakan function
`sendMessage` yang tidak memerlukan parameter apapun, namun kalian bisa
tambahkan parameter di sini.
```html
<!-- button.component.html -->
<button (click)="sendMessage()">Hit me</button>
```

3. Kemudian, pada class component, tambahkan sebuah function untuk meng-handle
event yang sudah kita buat.
```ts
import {
  // ...,
  EventEmitter, // pastikan ini ter-import dari @angular/core!
  Output,       // pastikan ini ter-import dari @angular/core!
  // ...
} from '@angular/core'

@Component({
  // ...
})
class ButtonComponent {
  // 1 - tambahkan directive @Output di sini
  @Output() sendMessageEvent = new EventEmitter<string>()

  // 2 - buat event handler-nya
  sendMessage () {
    this.sendMessageEvent.emit("Hi, parent! I'm your child.")
  }
}
```

**Parent Component**

Kita juga harus membuat sebuah event listener pada parent component, agar parent
component tahu, kalau child component meng-`emit` sebuah event.

1. Pada component HTML, buatlah sebuah event listener dengan nama yang sesuai
dengan nama event yang kita buat dengan directive `@Output` di atas. Namun, kali
ini kita masukkan parameter `$event` di dalamnya. Kali ini kita namakan
`showMessage` sebagai event handler-nya.
```html
<!-- app.component.html -->
<app-button (sendMessageEvent)="showMessage($event)"></app-button>

<!-- tampilkan juga pesan yang akan kita tampilkan dengan variable message -->
<p>{{ message }}</p>
```

2. Lalu, pada class component, kita buat sebuah event handler function untuk
menampilkan pesan.
```ts
// import ...

@Component({
  // ...
})
class AppComponent {
  message = ''

  showMessage (message: string) {
    this.message = message
  }

  // ...
}
```

Jadi, pada saat kita klik tombol ini, pesan akan muncul di layar.

============================================================================
SESSION 20: ANGULAR LIFECYCLES
============================================================================

Angular memiliki beberapa lifecycle, dengan urutan sebagai berikut:

- constructor -> bukan lifecycle sebenarnya, tapi akan dijalankan setiap kali
                 instance baru dibuat

- ngOnChanges -> akan dijalankan setiap kali perubahan dideteksi oleh Angular

- ngOnInit    -> akan dijalankan sekali, khususnya setelah component berhasil
                 dibentuk pertama kalinya.

- ngDoCheck   -> akan dijalankan setiap kali perubahan terjadi, dan tidak
                 dapat dideteksi oleh Angular. Perlu diingat, hook ini akan
                 di-trigger setiap perubahan terjadi.

-- Lifecycle berikut hanya terjadi untuk child component
[bayangkan ini dengan hooks created pada Vue jika kalian pernah membuat
aplikasi dengan Vue]
- ngAfterComponentInit    -> hanya terjadi sekali, yaitu ketika child component
                             berhasil dibuat, dan data berhasil diteruskan ke
                             dalam child component
- ngAfterComponentChecked -> terjadi setelah adanya perubahan pada child
                             component. Perlu diingat, sama seperti ngDoCheck,
                             hook ini akan di-trigger setiap perubahan terjadi.

[bayangkan ini dengan hooks mounted pada Vue jika kalian pernah membuat
aplikasi dengan Vue]
- ngAfterViewInit    -> hanya terjadi sekali, yaitu ketika child component
                        berhasil di-mount ke dalam DOM
- ngAfterViewChecked -> terjadi setelah adanya perubahan pada child component.
												Perlu diingat, sama seperti ngDoCheck, hook ini akan
                        di-trigger setiap perubahan terjadi.

============================================================================
SESSION 20: ANGULAR DATA BINDING
============================================================================

## Apa itu Angular Data Binding?

Data Binding di Angular akan memungkinkan kita untuk membuat halaman ter-
update secara otomatis berdasarkan state aplikasi tersebut.

## Tipe dan Target data binding

Angular memiliki beberapa macam untuk mengikat suatu prop/attribute dengan
sebuah data/event:

- Property
  Data akan di-bind ke property secara langsung, ataupun ke dalam attribute
  HTML yang ada. Sintaksnya adalah `[]`. Contohnya:
  - Element property
  	[src]="data"
  - Component property
  	[heroes]="data"
  - Directive property
  	[ngClass]="{ 'bg-red-400': !isValid }"

- Event
  Event akan di-bind untuk melemparkan suatu data dari satu component ke
  component lainnya. Sintaksnya adalah `()`. Contohnya:
  - Element event
  	<button (click)="functionName()">Click me</button>
  - Component event
  	<app-component (deleteRequest)="functionName()"></app-component>
  - Directive event
  	<div (customClickEvent)="clicked=$event" clickable>Click me</div>

- Two-way binding
  Ini hanya berlaku pada directive `ngModel`, yang nantinya akan di-bind
  ke sebuah property pada component tersebut.

  ```ts
  // input.component.ts

  // @Component({ ... })
  class InputComponent {
    propertyName = ''
  }
  ```

  ```html
  <!-- input.component.html -->
  <input ([ngModel])="propertyName" />
  ```

- Attribute
  Ini lebih sering digunakan pada `aria-` dan `data-`. Untuk dapat masuk
  kepada `aria-` dan `data-`, kita bisa tambahkan `attr` seperti cara di
  bawah ini:
  ```html
  <button [attr.aria-label]="help">Help me!</button>
  ```

- Class
  Ini sama seperti kita pakai directive `ngClass`, hanya saja kita langsung
  define di attribute `class` seperti berikut:
  ```html
  <div [class.special]="isSpecial">Ini adalah div special</div>
  ```

- Style
  Ini akan memberikan custom inline styling ke dalam component HTML yang
  kita buat. Diawali dengan `style`, kemudian diikuti dengan nama styling
  yang ingin kita buat, misalkan `font-size`:
  ```html
  <div [style['font-size']]="'72px'">Teks Besar</div>
  ```

## Macam-macam data binding

- Interpolation, Property, Attribute, Style, Class
  Yang berlaku di sini hanyalah **one-way data binding** dari Parent ke **Child**.
  Contoh:
  ```
  <!-- Interpolation -->
  {{ message }}

  <!-- data-binding di HTML -->
  <div [target]="expression"></div>
  <div bind-target="expression"></div>
  ```

- Event
  Yang berlaku di sini hanyalah **one-way data binding** dari **Child** ke Parent.
  Contoh:
  ```
  <div (event)="functionName()"></div>
  <div on-event="functionName()"></div>
  ```

- Two-way
  Sesuai namanya, memungkinkan kita untuk menggunakan **two-way data binding** antara
  Parent dan **Child** component.
  Contoh:
  ```
  <div [(target)]="expression"></div>
  <div bindon-target="expression"></div>
  ```

## EventEmitter

`EventEmitter` memungkinkan kita untuk melempar data dari Child component
kepada Parent component. `EventEmitter` ini menggunakan decorator `@Output()`
untuk meng-emit sebuah event, baik itu secara sync maupun async.

Cara ini sudah kita terapkan pada sesi 19 tentang `Angular Component` ya...

```ts
// child.component.ts
import { /* ... */ EventEmitter, Output } from '@angular/core';

// @Component({ ... })
export class ChildComponent {
  @Output() eventType = new EventEmitter(); // jika tidak ada value yang dilempar
  @Output() anotherEventType = new EventEmitter<number | string /* | dataTypeLain */>(); // jika tidak ada value yang dilempar

  eventHandler () {
    this.eventType.emit();
  }

  anotherEventHandler (value: number | string /* | dataTypeLain */) {
    this.anotherEventType.emit(value);
  }
}
```

============================================================================
SESSION 19: TYPESCRIPT
============================================================================

Konfigurasi:
- jalankan `tsc --init` (atau `npx tsc --init`)
- buka `tsconfig.json`
- ubah `target` menjadi `es6` (atau `esnext` untuk versi ECMAscript terbaru)
  - referensi: https://www.typescriptlang.org/tsconfig#target

### Instalasi

#### Lokal

1. Install `typescript` dengan `npm i typescript`
2. Inisialisasi TypeScript dengan `npx tsc --init` (optional)
3. Buat file `index.ts`
4. Compile dengan `npx tsc [NAMA_FILE].ts`, akan memiliki output `[NAMA_FILE].js`
5. Jalankan dengan `node [NAMA_FILE].js`

### Menerapkan TypeScript

#### Deklarasi Variable

```ts
// [let | const] [namaVariable]: [tipeData | tipeDataLain | ...] = [value]
const message: string = "Hello FSD OCBC 1"

let students: any[] = [
  [ 'Gusti', true, [ 'FSD', 'OCBC' ] ],
  [ 'Ricky', true ],
  ''
]
```

#### Deklarasi Function

```ts
function greetParticipant (name: string, age?: number) {
  console.log(`Hello ${name}! Your age is ${age}.`)
}

greetParticipant('Ricky')
```

#### Deklarasi Object

##### cara 1: declare type langsung

```ts
let student: {
  name: string
  age: number | string
  score: number
  address?: string
} = {
  name: 'Budi',
  age: 71,
  score: 100,
  address: "Jl. Merdeka 1234",
}
```

##### cara 2: declare type melalui Interface

```ts
// kita bisa define interface seperti ini...

interface StudentObject {
  name: string
  age: number | string
  score: number
  address?: string
}

// kemudian kita bisa declare seperti ini...

let anotherStudent: StudentObject = {
  name: "Rara",
  age: "infinite",
  score: 100,
}

// atau kita bisa declare sebagai array...

let employees: StudentObject[] = [
  // kemudian kita input object secara langsung di sini...

  {
    name: "Bayu",
    age: 21,
    score: 100
  },

  // atau pass sebuah variable di sini,
  // selama object memiliki tipe data yang sama

  anotherStudent
]
```

#### Deklarasi Class

```ts
// Deklarasi class utama

class Person {
  // name: string;
  // private age: number;

  constructor (protected name: string, private age: number) {
    this.name = name
    this.age = age
  }

  get personAge(): number {
    return this.age
  }
}

// Deklarasi class turunan/anakan

class Student extends Person {
  score: number;
  mentors: string[] = [];

  constructor (name: string, age: number, score: number, firstMentor: string) {
    // pakai super()
    super(name, age)
    this.score = score
    this.mentors.push(firstMentor)
  }

  changeScore (newScore: number) {
    this.score = newScore
  }

  addMentor (mentorName: string) {
    this.mentors.push(mentorName)
  }

  get studentName () {
    return this.name
  }
}

const riyan = new Student('Riyan', 22, 100, 'Arif')

console.log(riyan)

riyan.changeScore(105)
riyan.addMentor('Eas')

console.log(riyan.studentName)
```

### Troubleshoot

1. @010_Nicolavickh - Kalau di PowerShell nggak bisa jalankan typescript karena masalah ExecutionPolicy, jalankan ini:
	 ```ps
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
2. @017_BayuAJi - yang mendapat error seperti ini 'error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.' (saya dapat kasusnya di cmd, blum coba di PS)
	cmd
  tsc -t es5 [nama_file.ts]
