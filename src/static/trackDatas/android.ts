const androidData = {
  'name': 'Android',
  'about': [
    {
      'title': '구글 플레이에 등록',
      'description': '애플리케이션 개발 후 실제 마켓에 런칭'
    },
    {
      'title': '최신 트렌드에 대한 학습',
      'description': '메이저 업데이트와 오픈소스에 대한 이해'
    },
    {
      'title': '디자인 패턴의 실무적인 활용',
      'description': 'View 위주의 앱에서의 설계와 이해'
    }
  ],
  'curriculums': [
    {
      'week': '1',
      'contents': [
        {
          'title': 'Kotlin 언어의 특징, 기본 문법',
          'descriptions': [
            '타입 추론, val, var, ?, !!, 프로퍼티, 커스텀 접근자',
            '함수, 확장 함수, 고차 함수, 람다, 인라인 함수, 수신 객체 지정 람다',
            '클래스, 클래스의 종류, companion object',
            '컬렉션 확장 함수',
            '제네릭'
          ]
        },
        {
          'title': 'Android 에 대한 이해',
          'descriptions': [
            'Android 란 무엇인가?',
            'Android 버전 및 특징'
          ]
        },
        {
          'title': '안드로이드 스튜디오 설치'
        },
        {
          'title': 'Git, Git flow 전략',
          'descriptions': [
            'git-flow cheatsheet',
            'Git 및 git-fork 설치'
          ]
        }
      ]
    },
    {
      'week': '2',
      'contents': [
        {
          'title': 'Naming Convention',
          'descriptions': [
            'XML Naming Convention',
            'Kotlin Naming Convention',
            'Const Naming convention'
          ]
        },
        {
          'title': '기본 Widget',
          'descriptions': [
            'View란?',
            'Widget 종류',
            'Widget 사용 방법',
            'Widget 속성'
          ]
        },
        {
          'title': 'Layout 이란',
          'descriptions': [
            'LinearLayout이란?',
            'RelativeLayout이란?',
            'FrameLayout이란?',
            'Constraint Layout이란?'
          ]
        }
      ]
    },
    {
      'week': '3',
      'contents': [
        {
          'title': 'Resource',
          'descriptions': [
            'Drawable',
            'Layout',
            'Mipmap',
            'Color',
            'Strings'
          ]
        },
        {
          'title': 'Styling and Theming',
          'descriptions': [
            'themes.xml, Style 및 Custom style',
            'textAppearance',
            'attrs.xml'
          ]
        },
        {
          'title': '다양한 화면 크기, 버전, 다크 모드 대응',
          'descriptions': [
            '[resource]-[xxx]',
            'Mipmap',
            'Color',
            'Strings'
          ]
        }
      ]
    },
    {
      'week': '4',
      'contents': [
        {
          'title': 'Layout',
          'descriptions': [
            'Constraint Layout이란?',
            'Linear Layout이란?',
            'Frame Layout이란?'
          ]
        }
      ]
    },
    {
      'week': '5',
      'contents': [
        {
          'title': 'Fragment란?',
          'descriptions': [
            'Fragment 특징',
            'Fragment 생명주기',
            'FragmentManager 와 FragmentTransaction 활용',
            'Fragment와 생성자 이슈',
            '실습 : Activity 에서 버튼을 눌러 Fragment로 화면전환하기'
          ]
        },
        {
          'title': 'Dialog 이해',
          'descriptions': [
            'Dialog가 무엇인가?',
            'Dialog 종류',
            'Dialog 커스텀',
            'AlertDialog 실습'
          ]
        }
      ]
    },
    {
      'week': '6',
      'contents': [
        {
          'title': 'Event Listener',
          'descriptions': [
            'Event Listener란 무엇인가?'
          ]
        },
        {
          'title': 'ListView',
          'descriptions': [
            'ListView란?'
          ]
        },
        {
          'title': 'RecyclerView',
          'descriptions': [
            'RecyclerView란?',
            'ListView 와 RecyclerView 차이',
            'LayoutManager'
          ]
        }
      ]
    },
    {
      'week': '7',
      'contents': [
        {
          'title': 'Bottom Navigation',
          'descriptions': [
            'Bottom Navigation이란?',
            'Bottom Navigation과 Navigation Drawer'
          ]
        },
        {
          'title': 'ViewPager',
          'descriptions': [
            'ViewPager란?',
            'ViewPager와 ViewPager2 차이'
          ]
        },
        {
          'title': 'TabLayout',
          'descriptions': [
            'TabLayout이란?',
            'TabLayout + ViewPager2 로 스와이프 탭 구현'
          ]
        }
      ]
    },
    {
      'week': '8',
      'contents': [
        {
          'title': 'Notification',
          'descriptions': [
            'Oreo Notification과 이전 버전의 Notification 차이'
          ]
        },
        {
          'title': 'Fragment 및 Notification 실습'
        }
      ]
    },
    {
      'week': '9',
      'contents': [
        {
          'title': '공용 폴더에 파일 저장',
          'descriptions': [
            'Scoped Storage',
            'Oreo Background 제한',
            '뮤직플레이어 구현 실습'
          ]
        },
        {
          'title': 'Content Provider'
        },
        {
          'title': 'MediaStore'
        }
      ]
    },
    {
      'week': '10',
      'contents': [
        {
          'title': 'Service와 Service 생명주기'
        },
        {
          'title': 'Android Foreground와 Background',
          'descriptions': [
            'Foreground와 Background란?',
            'Oreo Background 제한'
          ]
        },
        {
          'title': '실습: 뮤직플레이어 구현해보기'
        }
      ]
    },
    {
      'week': '11',
      'contents': [
        {
          'title': 'Thread',
          'descriptions': [
            'Thread란 무엇인가?',
            'ui 스레드와 스레드'
          ]
        },
        {
          'title': 'Coroutine',
          'descriptions': [
            'Coroutine이란 무엇인가?',
            'Coroutine과 Thread 차이점',
            'CoroutineScope, Dispatcher',
            'Suspend Function'
          ]
        },
        {
          'title': '실습: StopWatch 구현'
        }
      ]
    },
    {
      'week': '12',
      'contents': [
        {
          'title': '디자인 패턴이란 무엇인가?',
          'descriptions': [
            'Clean Architecture',
            'Architectural Design Pattern'
          ]
        },
        {
          'title': 'MVC'
        },
        {
          'title': 'MVP'
        },
        {
          'title': 'MVVM'
        },
        {
          'title': 'MVI'
        },
        {
          'title': 'View Binding과 Data Binding',
          'descriptions': [
            'View Binding과 Data Binding 이해'
          ]
        },
        {
          'title': '실습: 디자인 패턴(MVP,MVVM), Data Binding'
        }
      ]
    },
    {
      'week': '13',
      'contents': [
        {
          'title': 'Open Source',
          'descriptions': [
            '오픈소스 라이브러리란 무엇인가?',
            'RxJava(RxKotlin)',
            'Retrofit2',
            'Glide',
            'Jetpack',
            'Meterial Design'
          ]
        },
        {
          'title': '실습: Open Source Library'
        }
      ]
    },
    {
      'week': '14',
      'contents': [
        {
          'title': '난독화',
          'descriptions': [
            '난독화란?',
            'Proguard R8'
          ]
        },
        {
          'title': '자율 상용화 서비스 프로젝트 주제 선정'
        },
        {
          'title': '실습: Open Source Library(Retrofit2) 실습'
        }
      ]
    },
    {
      'week': '15 ~ 19',
      'contents': [
        {
          'title': '프로젝트 개발'
        }
      ]
    },
    {
      'week': '20',
      'contents': [
        {
          'title': '회고'
        }
      ]
    }
  ]
};

export default androidData;