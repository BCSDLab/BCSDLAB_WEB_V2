const backendData = {
  'name': 'Back-End',
  'about': [
    {
      'title': '서버 개발 및 인프라 구축 경험',
      'description': '백엔드의 전반적인 분야 학습'
    },
    {
      'title': '전공 지식의 실질적 활용',
      'description': '컴퓨터공학 지식을 밀접하게 활용'
    },
    {
      'title': '안정적인 서비스 운영',
      'description': '현업에서 사용하는 서비스 지탱 기술'
    }
  ],
  'curriculums': [
    {
      'week': '1',
      'contents': [
        {
          'title': '개발환경 세팅하기 (IntelliJ, JDK)',
          'descriptions': [
            '인텔리제이 설치',
            'JDK 설정'
          ]
        },
        {
          'title': '실습: 자바 온보딩 미션 - 자동차경주 게임 구현',
          'descriptions': [
            'https://github.com/BCSDLab-Edu/java-racingcar'
          ]
        }
      ]
    },
    {
      'week': '2',
      'contents': [
        {
          'title': '객체지향 프로그래밍',
          'descriptions': [
            'SOLID 원칙',
            'OOP의 4가지 특징'
          ]
        },
        {
          'title': '실습: 자동차 경주 게임 - 리팩터링'
        }
      ]
    },
    {
      'week': '3',
      'contents': [
        {
          'title': '데이터베이스 기본',
          'descriptions': [
            '관계형 데이터베이스',
            'RDBMS',
            'SQL (DDL, DCL, DML)',
            'NoSQL'
          ]
        },
        {
          'title': '실습: SQL 쿼리 작성'
        },
        {
          'title': '실습: 데이터베이스 설계'
        }
      ]
    },
    {
      'week': '4',
      'contents': [
        {
          'title': '네트워크 기본',
          'descriptions': [
            'IP 주소, PORT, DNS, URL, URI'
          ]
        },
        {
          'title': 'HTTP',
          'descriptions': [
            'HTTP 메시지의 구조와 기능',
            'HTTP 메소드와 응답코드',
            'HTTP를 이용한 웹 요청 흐름'
          ]
        },
        {
          'title': 'RestAPI'
        },
        {
          'title': '실습: REST API 설계하기'
        }
      ]
    },
    {
      'week': '5',
      'contents': [
        {
          'title': 'Spring',
          'descriptions': [
            'Library, Framework',
            'Spring Framework란?',
            'Spring과 SpringBoot'
          ]
        },
        {
          'title': '실습: SpringBoot 프로젝트 환경설정'
        }
      ]
    },
    {
      'week': '6',
      'contents': [
        {
          'title': 'Spring MVC',
          'descriptions': [
            'MVC란?',
            'Spring MVC',
            'Spring MVC Request LifeCycle'
          ]
        },
        {
          'title': '실습: GET, POST 요청하는 API 만들기'
        }
      ]
    },
    {
      'week': '7',
      'contents': [
        {
          'title': 'Spring JDBC',
          'descriptions': [
            'JdbcTemplate',
            'h2 Database'
          ]
        },
        {
          'title': '실습: JDBC를 이용한 CRUD'
        }
      ]
    },
    {
      'week': '8',
      'contents': [
        {
          'title': 'Spring Bean',
          'descriptions': [
            'POJO Bean과 Spring Bean',
            'Bean Scope (singleton 방식과 prototype 방식)'
          ]
        },
        {
          'title': 'Servlet과 Servlet Container'
        },
        {
          'title': '의존성 주입 (DI) / 제어의 역전 (IOC)',
          'descriptions': [
            'Spring Bean 생명주기'
          ]
        },
        {
          'title': '관점지향 프로그래밍 (AOP)'
        },
        {
          'title': '실습: AOP를 활용한 함수 실행시간 측정하기'
        }
      ]
    },
    {
      'week': '9',
      'contents': [
        {
          'title': 'ORM과 JPA'
        },
        {
          'title': 'Entity, 영속화, 1차캐시'
        },
        {
          'title': 'Spring Data JPA'
        },
        {
          'title': '실습: 7주차에서 작성한 코드 JPA로 리팩터링'
        }
      ]
    },
    {
      'week': '10',
      'contents': [
        {
          'title': 'JPA 연관관계 매핑',

        },
        {
          'title': 'Spring MVC Request Lifecycle',
          'descriptions': [
            '컨트롤러와 서비스의 차이',
            'url mapping',
            '비즈니스로직'
          ]
        },
        {
          'title': '실습 : AOP를 활용한 로그 측정'
        }
      ]
    },
    {
      'week': '11',
      'contents': [
        {
          'title': '보안 기초',
          'descriptions': [
            '보안, 암호화, 복호화',
            '해싱 알고리즘'
          ]
        },
        {
          'title': '웹에서의 보안',
          'descriptions': [
            'HTTP와 HTTPS',
            '쿠키, 세션, JWT',
            'Bcrypt'
          ]
        },
        {
          'title': '실습: JWT를 활용하여 로그인 구현하기'
        }
      ]
    },
    {
      'week': '12',
      'contents': [
        {
          'title': 'AWS와 배포',
          'descriptions': [
            'EC2',
            '간단한 애플리케이션 배포 흐름'
          ]
        },
        {
          'title': '회고 안내',
          'descriptions': [
            '회고프로젝트 설명 및 일정 안내',
            '프로젝트 진행 방식 설명'
          ]
        }
      ]
    },
    {
      'week': '13 ~ 16',
      'contents': [
        {
          'title': 'Project',
          'descriptions': [
            '자유 주제로 개인 프로젝트 진행'
          ]
        }
      ]
    },
    {
      'week': '17',
      'contents': [
        {
          'title': '회고'
        }
      ]
    }
  ]
};

export default backendData;