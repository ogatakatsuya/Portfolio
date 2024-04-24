const Works = () => {
    return (
        <div class="container my-5">
        <h2 id="works" class="title">
            <img src="images/comment4_hoso.png" class="insert1 img-fluid" alt=""></img>Works</h2>

        <div class="card-deck">
            
            <div class="card">
                <img src="images/Screenshot 2024-03-22 at 16.30.42.png" alt=""></img>
                <div class="card-body">
                    <h4 class="card-title">Kitchen Keeper</h4>
                    <small class="card-body">Python/Flask/HTML/CSS/Bootstrap</small>
                    <p class="card-body">食材の追加・編集・削除を行うことができ，食材の管理ができるアプリケーションです．</p>
                    <a href="https://foodmanagement-0a91e82ec60c.herokuapp.com/" target="_blank" class="btn btn-primary mr-3">アプリはこちら</a>
                    <a href="https://github.com/ogatakatsuya/Food_Management" target="_blank" class="btn btn-secondary">github</a>
                </div>
            </div>
    
            <div class="card">
                <img src="images/quickcast.png" alt=""></img>
                <div class="card-body">
                    <h4 class="card-title">Quick Cast</h4>
                    <small class="card-body">Python/Flask/HTML/CSS/Bootstrap</small>
                    <p class="card-body">都道府県名を入れると，リアルタイムの天気情報と5日先までの天気予報を表示してくれるアプリケーションです．</p>
                    <a href="https://quickcast-ca3839a4052c.herokuapp.com/" target="_blank" class="btn btn-primary mr-3">アプリはこちら</a>
                    <a href="https://github.com/ogatakatsuya/QuickCast" target="_blank" class="btn btn-secondary">github</a>
                </div>
            </div>
    
            <div class="card">
                <img src="images/Screenshot 2024-03-22 at 11.26.31.png" alt=""></img>
                <div class="card-body">
                    <h4 class="card-title">ポートフォリオ</h4>
                    <small class="card-body">HTML/CSS/Bootstrap</small>
                    <p class="card-body">自己紹介と自分自身のスキルや実装してきた成果物を載せるためのポートフォリオです．</p>
                    <a href="https://github.com/ogatakatsuya/Portfolio" target="_blank" class="btn btn-secondary">github</a>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Works;