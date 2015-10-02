# A New Terminal: Solution
Below is one solution to A New Terminal. You can do it differently, of course, depending on how you navigate the directory structure. 
* The `tree` command is like running `ls -R` and getting the output in a graphical tree structure. To install it with Homebrew, run `brew update` and then `brew install tree`.
* The `-v` flags I've included stand for _verbose._ They're not necessary, but they display a confirmation of the operation you've just performed. Check the manual pages for the associated commands to find out more (`man commandName`).

Note that `$` stands for a Bash prompt; the user doesn't type it.

## Set-up
Launch Terminal and navigate to the course directory w01/d01/ASSIGNMENT/morning_exercise/
```
$ mkdir galaxy-far-far-away
$ cd galaxy-far-far-away/
$ mkdir death-star
$ cd death-star/
$ touch darth-vader.txt
$ touch princess-leia.txt
$ touch storm-trooper.txt
$ cd ..
$ mkdir tatooine
$ cd tatooine/
$ touch luke.txt
$ touch ben-kenobi.txt
$ mkdir millennium-falcon
$ cd millennium-falcon/
$ touch han-solo.txt
$ touch chewbacca.txt
```

## Part I
```
$ cd ../../..
$ cd galaxy-far-far-away/tatooine/
$ mv -v ben-kenobi.txt obi-wan.txt
$ cd ..
$ cp -v death-star/storm-trooper.txt tatooine/
$ mv -v tatooine/luke.txt tatooine/obi-wan.txt tatooine/millennium-falcon/
$ mv -v tatooine/millennium-falcon .
$ mv -v death-star/princess-leia.txt millennium-falcon/
$ rm -v millennium-falcon/obi-wan.txt 
$ mkdir yavin-4
$ mv millennium-falcon yavin-4/
$ mkdir yavin-4/x-wing
$ mv -v yavin-4/millennium-falcon/princess-leia.txt yavin-4/
$ mv -v yavin-4/millennium-falcon/luke.txt yavin-4/x-wing/
```

## Part II
```
$ mv -v yavin-4/millennium-falcon yavin-4/x-wing .
$ mkdir death-star/tie-fighter-1 
$ mkdir death-star/tie-fighter-2
$ mkdir death-star/tie-fighter-3
$ mv -v death-star/darth-vader.txt death-star/tie-fighter-1/
$ cp -v death-star/storm-trooper.txt death-star/tie-fighter-2/
$ cp -v death-star/storm-trooper.txt death-star/tie-fighter-3/
$ mv -v death-star/tie-fighter-1 .
$ mv -v death-star/tie-fighter-2 .
$ mv -v death-star/tie-fighter-3 .
$ rm -rv tie-fighter-3 tie-fighter-2
$ touch x-wing/the-force.txt
$ rm -r death-star
$ mv -v x-wing millennium-falcon yavin-4/
```
