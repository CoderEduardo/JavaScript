var video = Array()

video[1] = []

video[1]['nome'] = 'Death Note'
video[1]['categoria'] = 'Anime'

function getVideo(video){
    try{
        console.log(video[0]['nome'])
    } 
    catch(erro){
        console.log(erro) //demonstra a string do erro
        console.log('Agora sim podemos tratar esse erro')
    }
    finally{
        console.log('Sempre passa por aqui (try/catch)')
    }
}

getVideo()