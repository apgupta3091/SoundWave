# SoundWave

## BACKGROUND:

Soundwave
is a clone of SoundCloud. A music streaming app which allows users to stream their favorite songs as well as upload their own music to the platform.

<img width="1437" alt="Screen Shot 2022-01-25 at 4 16 29 PM" src="https://user-images.githubusercontent.com/53449807/151061159-d5fadbe8-b584-4bb0-8225-48ec2e998b67.png">

-----------------------------------------------------------------------------

## TECHNOLOGIES, LIBRARIES, API'S:

- Ruby
- Rails
- React
- Redux
- Postgresql
- AWS
- S3

-----------------------------------------------------------------------------
## FEATURES

### Splash/User Auth
<img width="452" alt="Screen Shot 2022-01-25 at 4 17 42 PM" src="https://user-images.githubusercontent.com/53449807/151061370-bf4f8b7b-1c25-4ffd-8ac5-f0f2be02f8b8.png">

The Sign in form and the Sign up form both utilize the same react component but render the correct information through the use
of containers. Below is the code for the sign in container.

```
const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Sign in',
});

const mDTP = (dispatch, ownProps) => ({
    processForm: formUser => dispatch(login(formUser)),
    loginGuest: guest => dispatch(login(guest)),
   
});
```

<img width="450" alt="Screen Shot 2022-01-25 at 4 17 51 PM" src="https://user-images.githubusercontent.com/53449807/151061376-d6fb1038-0695-4db4-8060-b4bd7949bb24.png">


The Sign in form and the Sign up form both utilize the same react component but render the correct information through the use
of containers. Below is the code for the sign up container.

```
const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Create account',
});

const mDTP = (dispatch, ownProps) => ({
    processForm: formUser => dispatch(signup(formUser)),
    loginGuest: guest => dispatch(login(guest)),
});
```

### Song CRUD

#### Create
<img width="626" alt="Screen Shot 2022-01-25 at 4 18 42 PM" src="https://user-images.githubusercontent.com/53449807/151061630-4408d9ca-38d7-45ac-974e-90dc78ba55ce.png">

The Create Song form and the other CRUD functionality's were created through rails' backend with the method below.
The actual form was created in React and utilized Redux state changes to update the form and allow for submission of the form
to the backend.

```
def create
    @song = Song.new(song_create_params)
    @song.artist_id = current_user.id 
    if @song.save
        render :show 
    else
        render json: @song.errors.full_messages
    end
end
```

#### Update

<img width="623" alt="Screen Shot 2022-01-25 at 4 19 02 PM" src="https://user-images.githubusercontent.com/53449807/151061644-bd57318d-4e68-4321-8630-7adcf52fbdbc.png">

The Update Song form and the other CRUD functionality's were created through rails' backend with the method below.
The actual form was created in React and utilized Redux state changes to update the form and allow for submission of the form
to the backend.

```
def update 
    @song = Song.find_by(id: params[:song][:id])
    if @song.update(song_update_params)
        render :show 
    else
        render json: @song.errors.full_messages 
    end
end
```

#### Read/Delete

<img width="1437" alt="Screen Shot 2022-01-25 at 4 19 22 PM" src="https://user-images.githubusercontent.com/53449807/151061651-abab67a2-f7bb-47ef-abd4-f2e87ee512c7.png">

The Read and Delete were methods created in the rails backend to allow a song to get read with it's data appearing on the page
as well as allow for that song to get deleted from the db. React allowed me to grab the data from the backend and serve it
for each songs show page as well as adding an onClick even handler to delete the song which sent a request to the backend to delete
the song.

```
def destroy 
    @song = Song.find_by(id: params[:id])
    @song.destroy
    render json: {}
end
```


### Continous Play Bar

<img width="719" alt="Screen Shot 2022-01-25 at 4 21 05 PM" src="https://user-images.githubusercontent.com/53449807/151061860-29c9913a-908c-4ef2-a0ea-f9903e5bce82.png">

The Continuous Play bar was implemented with React. A few functionality's in the play bar include replaying a song, drag and drop to any point of 
the song, updating input bar while the song plays, and the ability to play and pause the song.

```
const mSTP = state => ({
    currentSong: state.ui.play.currentSong,
    playing: state.ui.play.playing,
});

const mDTP = (dispatch) => ({
    receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    removeSong: () => dispatch(removeSong()),
});
```


### Comments

<img width="719" alt="Screen Shot 2022-01-25 at 4 21 05 PM" src="https://user-images.githubusercontent.com/53449807/151061860-29c9913a-908c-4ef2-a0ea-f9903e5bce82.png">

The Continuous Play bar was implemented with React. A few functionality's in the play bar include replaying a song, drag and drop to any point of 
the song, updating input bar while the song plays, and the ability to play and pause the song.

```
const mSTP = state => ({
    currentSong: state.ui.play.currentSong,
    playing: state.ui.play.playing,
});

const mDTP = (dispatch) => ({
    receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    removeSong: () => dispatch(removeSong()),
});
```
-----------------------------------

