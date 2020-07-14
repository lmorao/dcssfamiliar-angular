
# DcssfamiliarAngular

<div>
  <a href="https://dcssfamiliar.com">
	<img src="https://raw.githubusercontent.com/ezmonkey4/dcssfamiliar-angular/master/src/assets/images/DCSS_logo.png" alt="dcssfamiliar logo">
            <h1 style="float:center"> <font size="26" color="red">familiar</font></h1>
  </a>

</div>


https://dcssfamiliar.com  

This website serves as a damage calculator tool for an old dungeon crawl game: https://crawl.develz.org 

## Tool Features

### Weapon damage calculator

The tool calculates damage based weapon, brand, skills, stats, slaying and enemy armor.

#### Limitations

* It does not account for evasion. This is actually a big part of the calculation that is missing, but right now I don't have time to do the work.

* There may be some errors on aproximations (like divisions)  when I converted the C++ to javascript

### Spell damage calculator

The tool displays spell power based on skills and items used.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.
