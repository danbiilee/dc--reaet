import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

/* 
  💩💩💩 고칠 점 
  1. api_key 숨김 처리
  2. 네트워크 통신 로직 분리 
    - class에 통신에 관한 로직을 모아놓고, 필요할 때 컴포넌트에 주입(dependency injection)
    - unit test를 해야할 경우, 테스트를 할 때마다 네트워크 통신이 되어야하는 것은 최악! 
      -> test할 땐 mock data가 들어있는 class를 전달
  
  💡 결론: MVC 패턴의 View에 충실한 (멍청한) React Component 만들기
*/
function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selecteVideo, setSelecteVideo] = useState(null);

  const selectVideo = video => setSelecteVideo(video);

  const search = query => {
    /* 
      ✅ 기능 추가
      - 로딩 스피너 보이기       
      - error state 추가하기
    */
    youtube
      .search(query) //
      .then(videos => {
        setVideos(videos);
        setSelecteVideo(null); // ✅ 검색 시 다시 grid 목록으로 돌아가기
      });
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selecteVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selecteVideo} />
          </div>
        )}
        {/* 리액트 컴포넌트에는 className을 지정할 수 없음. 스타일링이 필요하면 구조적으로 태그 추가 */}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selecteVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
