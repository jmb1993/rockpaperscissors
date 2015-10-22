## Alarm Clock V2.0

![clock](http://media.tumblr.com/931e3177e808ef21c30308462ab7cd45/tumblr_inline_mqqcj87EKH1qz4rgp.gif)

### Learning Objectives
- Practice using ruby Classes
- Practice using ruby Modules
- Practice interacting with the command line from a ruby script

# Step 1

You will need to create the following file structure in the folder for today

```
+-- alarm_clock
    +-- models
        +-- alarm.rb
    +-- modules
        +-- spotify.rb
        +-- volume_controls.rb
    +-- app.rb
```

# Step 2

### spotify.rb

In the `spotify.rb` file, create a module called `SpotifyControls` this module should have the following methods:

- `launch`
 - which will have osascript launch spotify
- `quit`
 - which will have osascript tell spotify to quit
- `press_play`
 - which will have osascript tell spotify to play
- `pause`
 - which will have osascript tell spotify to pause


# Step 3

In the `volume_controls.rb` file, create a module called 'VolumeControls' this module should have the following methods:

- `set_max_volume`
 - which will return a string that will have osascript set the volume for your computer
- `set_min_volume`
 - which will return a string that will have osascript set the volume back to something reasonable on your computer
- `mute`
 - which will return a string that will have osacript mute the volume on your computer

# Step 4

In the `alarm.rb` file, create a class called `Alarm`, this class should have the folowing methods:

- `initialize`
 - should accept an argument and set an instance variable `wake` to the incoming argument
- `sound_alarm`
 - should use the `SpotifyControls` and 'VolumeControls' modules to set the volume, launch the app and start the suite suite tunes.
- `wait`
 - should have your program sleep for a period of time based of the `wake` instance variable

# Step 5

In the `app.rb` file, prompt the user for a wake time. Make a new instance of an `Alarm` and give the new instance the proper command to start clock.
