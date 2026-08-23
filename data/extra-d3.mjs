/**
 * Câu hỏi BỔ SUNG — phần thi d3 (Azure management and governance) và d4 (chủ đề mở rộng).
 * Bù cho các chủ đề trong đề cương mà bộ slide PDF gốc không có câu nào.
 * Nguồn song ngữ: q/o/e là tiếng Anh, vq/vo/ve là bản dịch tiếng Việt.
 */
export default [
  /* ---------------- gc-purview: Microsoft Purview ---------------- */
  {
    id: 1051,
    topic: 'gc-purview',
    type: 'single',
    q: [
      'An organisation stores data across Azure, an on-premises SQL Server and another cloud provider. It needs one catalogue that maps where all of that data lives and classifies which of it is sensitive.',
      'Which solution should it use?',
    ],
    o: [
      ['Microsoft Purview', true],
      ['Azure Policy', false],
      ['Azure Monitor', false],
      ['Microsoft Defender for Cloud', false],
    ],
    e: [
      [
        'Microsoft Purview is the data governance suite: it builds a data map across Azure, on-premises and other clouds, catalogues the assets, classifies sensitive data and traces data lineage.',
        'Azure Policy governs the shape of resources, not the content of data.',
      ],
    ],
    vq: [
      'Một tổ chức lưu dữ liệu rải rác trên Azure, một SQL Server tại chỗ và một nhà cung cấp cloud khác. Họ cần một danh mục duy nhất lập bản đồ nơi toàn bộ dữ liệu đó nằm và phân loại phần nào là nhạy cảm.',
      'Họ nên dùng giải pháp nào?',
    ],
    vo: [
      'Microsoft Purview',
      'Azure Policy',
      'Azure Monitor',
      'Microsoft Defender for Cloud',
    ],
    ve: [
      [
        'Microsoft Purview là bộ giải pháp quản trị dữ liệu: dựng bản đồ dữ liệu trải khắp Azure, tại chỗ và cloud khác, lập danh mục tài sản, phân loại dữ liệu nhạy cảm và theo dõi dòng chảy dữ liệu.',
        'Azure Policy quản hình hài của tài nguyên, không quản nội dung dữ liệu.',
      ],
    ],
  },

  {
    id: 1052,
    topic: 'gc-purview',
    type: 'yesno_table',
    q: [
      'For each of the following statements about Microsoft Purview, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      { p: 'Purview can classify sensitive data such as credit card numbers.', o: ['Yes', 'No'], a: 0 },
      { p: 'Purview can trace the lineage of data as it moves between systems.', o: ['Yes', 'No'], a: 0 },
      { p: 'Purview only works with data stored inside Azure.', o: ['Yes', 'No'], a: 1 },
    ],
    e: [
      [
        'Purview classifies data against built-in and custom sensitive information types, and shows lineage so you can see where a dataset came from.',
        'It deliberately spans Azure, on-premises systems and other clouds — being limited to Azure would defeat its purpose.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau về Microsoft Purview, chọn Yes nếu phát biểu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      { p: 'Purview có thể phân loại dữ liệu nhạy cảm như số thẻ tín dụng.', o: ['Yes', 'No'] },
      { p: 'Purview có thể theo dõi dòng chảy của dữ liệu khi nó di chuyển giữa các hệ thống.', o: ['Yes', 'No'] },
      { p: 'Purview chỉ làm việc với dữ liệu lưu bên trong Azure.', o: ['Yes', 'No'] },
    ],
    ve: [
      [
        'Purview phân loại dữ liệu theo các kiểu thông tin nhạy cảm dựng sẵn lẫn tự định nghĩa, và hiển thị data lineage để bạn thấy một tập dữ liệu đến từ đâu.',
        'Nó cố tình trải rộng qua Azure, hệ thống tại chỗ và cloud khác — nếu chỉ giới hạn trong Azure thì mất hết ý nghĩa.',
      ],
    ],
  },

  {
    id: 1053,
    topic: 'gc-purview',
    type: 'single',
    q: ['Which Microsoft Purview capability lets business users search for and discover data assets across the organisation?'],
    o: [
      ['The data catalog', true],
      ['The data map', false],
      ['Data lineage', false],
      ['Secure Score', false],
    ],
    e: [
      [
        'The data catalog is the searchable front end that business users browse to find data assets, complete with business glossary terms.',
        'The data map is the underlying inventory that the catalog is built on; lineage shows how data flows; Secure Score belongs to Defender for Cloud.',
      ],
    ],
    vq: ['Khả năng nào của Microsoft Purview cho phép người dùng nghiệp vụ tìm và khám phá tài sản dữ liệu trên toàn tổ chức?'],
    vo: ['Data catalog', 'Data map', 'Data lineage', 'Secure Score'],
    ve: [
      [
        'Data catalog là giao diện tìm kiếm mà người dùng nghiệp vụ duyệt để tìm tài sản dữ liệu, kèm cả từ điển thuật ngữ nghiệp vụ.',
        'Data map là bản kiểm kê nền bên dưới mà catalog dựa vào; lineage cho thấy dữ liệu chảy thế nào; Secure Score thì thuộc Defender for Cloud.',
      ],
    ],
  },

  {
    id: 1054,
    topic: 'gc-purview',
    type: 'yesno',
    q: ['Microsoft Purview is a data governance solution, whereas Azure Policy is a resource governance solution.'],
    subs: [{ p: '', o: ['Yes', 'No'], a: 0 }],
    e: [
      [
        'Purview governs data — where it is, what it contains and how it moves. Azure Policy governs resources — what may be created, where, and with which settings. They solve different halves of governance.',
      ],
    ],
    vq: ['Microsoft Purview là giải pháp quản trị DỮ LIỆU, còn Azure Policy là giải pháp quản trị TÀI NGUYÊN.'],
    vsubs: [{ p: '', o: ['Yes', 'No'] }],
    ve: [
      [
        'Purview quản trị dữ liệu — nó nằm đâu, chứa gì và di chuyển thế nào. Azure Policy quản trị tài nguyên — được tạo ra cái gì, ở đâu, với thiết lập nào. Hai bên giải hai nửa khác nhau của bài toán quản trị.',
      ],
    ],
  },

  /* ---------------- mg-portal: Azure portal ---------------- */
  {
    id: 1055,
    topic: 'mg-portal',
    type: 'single',
    q: [
      'Which Azure management tool provides a graphical, browser-based interface with customisable dashboards?',
    ],
    o: [
      ['The Azure portal', true],
      ['Azure PowerShell', false],
      ['The Azure CLI', false],
      ['Azure Resource Manager templates', false],
    ],
    e: [
      [
        'The Azure portal is the web-based graphical interface for creating and managing every Azure resource, and it supports dashboards you can pin resources to and share.',
        'PowerShell, the CLI and ARM templates are all non-graphical.',
      ],
    ],
    vq: [
      'Công cụ quản lý nào của Azure cung cấp giao diện đồ hoạ chạy trên trình duyệt kèm dashboard tuỳ biến được?',
    ],
    vo: [
      'Azure portal',
      'Azure PowerShell',
      'Azure CLI',
      'ARM template',
    ],
    ve: [
      [
        'Azure portal là giao diện đồ hoạ chạy trên web để tạo và quản lý mọi tài nguyên Azure, và nó hỗ trợ dashboard cho phép ghim tài nguyên rồi chia sẻ.',
        'PowerShell, CLI và ARM template đều không có giao diện đồ hoạ.',
      ],
    ],
  },

  {
    id: 1056,
    topic: 'mg-portal',
    type: 'yesno_table',
    q: [
      'For each of the following statements about the Azure portal, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      { p: 'The Azure portal requires software to be installed on the administrator’s computer.', o: ['Yes', 'No'], a: 1 },
      { p: 'Azure Cloud Shell can be opened directly from the Azure portal.', o: ['Yes', 'No'], a: 0 },
      { p: 'Azure has a mobile app that can monitor and manage resources from a phone.', o: ['Yes', 'No'], a: 0 },
    ],
    e: [
      [
        'The portal runs in any modern browser — nothing is installed locally.',
        'Cloud Shell opens from the portal toolbar, and the Azure mobile app gives a subset of portal functionality on a phone.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau về Azure portal, chọn Yes nếu phát biểu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      { p: 'Azure portal đòi hỏi phải cài phần mềm trên máy của quản trị viên.', o: ['Yes', 'No'] },
      { p: 'Azure Cloud Shell mở được trực tiếp từ Azure portal.', o: ['Yes', 'No'] },
      { p: 'Azure có ứng dụng di động cho phép giám sát và quản lý tài nguyên từ điện thoại.', o: ['Yes', 'No'] },
    ],
    ve: [
      [
        'Portal chạy trên mọi trình duyệt hiện đại — không cài gì lên máy cả.',
        'Cloud Shell mở được từ thanh công cụ của portal, còn ứng dụng Azure trên điện thoại cho một phần chức năng của portal.',
      ],
    ],
  },

  {
    id: 1057,
    topic: 'mg-portal',
    type: 'single',
    q: [
      'An administrator must perform the same set of resource-creation steps every week for different teams.',
      'Why is the Azure portal a poor choice for this task?',
    ],
    o: [
      ['Manual steps in the portal are slow to repeat and easy to get wrong', true],
      ['The portal cannot create resources at all', false],
      ['The portal is only available on Windows', false],
      ['The portal cannot be used by more than one administrator', false],
    ],
    e: [
      [
        'The portal is excellent for exploration and one-off work, but repeated work should be scripted or templated so the result is identical every time.',
        'Use the CLI, PowerShell or an ARM template for anything you do more than a couple of times.',
      ],
    ],
    vq: [
      'Một quản trị viên phải thực hiện cùng một bộ thao tác tạo tài nguyên mỗi tuần cho các nhóm khác nhau.',
      'Vì sao Azure portal là lựa chọn kém cho công việc này?',
    ],
    vo: [
      'Thao tác tay trong portal lặp lại thì chậm và dễ sai',
      'Portal hoàn toàn không tạo được tài nguyên',
      'Portal chỉ chạy trên Windows',
      'Portal không cho nhiều quản trị viên cùng dùng',
    ],
    ve: [
      [
        'Portal rất tốt để khám phá và làm việc lẻ, nhưng công việc lặp lại thì nên viết script hoặc dùng template để kết quả giống hệt nhau mỗi lần.',
        'Việc nào bạn làm quá vài lần thì hãy chuyển sang CLI, PowerShell hoặc ARM template.',
      ],
    ],
  },

  /* ---------------- mg-arc: Azure Arc ---------------- */
  {
    id: 1058,
    topic: 'mg-arc',
    type: 'single',
    q: [
      'A company runs servers in its own datacenter and in another public cloud. It wants to apply Azure Policy to those servers and see them in the Azure portal alongside its Azure resources.',
      'Which service should it use?',
    ],
    o: [
      ['Azure Arc', true],
      ['Azure Migrate', false],
      ['Azure Stack', false],
      ['Azure Monitor', false],
    ],
    e: [
      [
        'Azure Arc projects servers, Kubernetes clusters and some databases that live outside Azure into Azure’s management plane, so they can be tagged, governed by Azure Policy and covered by Defender for Cloud.',
        'Azure Migrate moves workloads into Azure rather than managing them where they are.',
      ],
    ],
    vq: [
      'Một công ty vận hành máy chủ trong datacenter của mình và trên một public cloud khác. Họ muốn áp Azure Policy cho các máy chủ đó và nhìn thấy chúng trong Azure portal cùng với tài nguyên Azure.',
      'Họ nên dùng dịch vụ nào?',
    ],
    vo: ['Azure Arc', 'Azure Migrate', 'Azure Stack', 'Azure Monitor'],
    ve: [
      [
        'Azure Arc đưa máy chủ, cụm Kubernetes và một số cơ sở dữ liệu nằm ngoài Azure vào lớp quản lý của Azure, nhờ vậy chúng gắn tag được, chịu quản trị bởi Azure Policy và được Defender for Cloud bảo vệ.',
        'Azure Migrate thì chuyển khối lượng công việc vào Azure, chứ không quản lý chúng tại chỗ.',
      ],
    ],
  },

  {
    id: 1059,
    topic: 'mg-arc',
    type: 'yesno',
    q: ['Azure Arc requires you to move your on-premises servers into Azure before you can manage them.'],
    subs: [{ p: '', o: ['Yes', 'No'], a: 1 }],
    e: [
      [
        'The whole point of Azure Arc is the opposite: the servers stay exactly where they are, and Azure reaches out to manage them. Moving workloads into Azure is what Azure Migrate is for.',
      ],
    ],
    vq: ['Azure Arc bắt buộc bạn phải chuyển máy chủ tại chỗ vào Azure rồi mới quản lý được chúng.'],
    vsubs: [{ p: '', o: ['Yes', 'No'] }],
    ve: [
      [
        'Ý nghĩa của Azure Arc lại đúng là ngược lại: máy chủ nằm nguyên tại chỗ, còn Azure vươn ra để quản lý chúng. Việc chuyển khối lượng công việc vào Azure là nhiệm vụ của Azure Migrate.',
      ],
    ],
  },

  {
    id: 1060,
    topic: 'mg-arc',
    type: 'multi',
    q: [
      'Which TWO kinds of resource can be brought under management with Azure Arc?',
      'Each correct answer presents a complete solution.',
    ],
    o: [
      ['Servers running outside Azure', true],
      ['Kubernetes clusters running outside Azure', true],
      ['Physical datacenters owned by Microsoft', false],
      ['Azure region pairs', false],
    ],
    e: [
      [
        'Azure Arc supports Arc-enabled servers, Arc-enabled Kubernetes and Arc-enabled data services.',
        'Microsoft’s own datacenters and region pairs are parts of the Azure platform, not customer resources to manage.',
      ],
    ],
    vq: [
      'HAI loại tài nguyên nào có thể đưa vào quản lý bằng Azure Arc?',
      'Mỗi đáp án đúng là một lời giải trọn vẹn.',
    ],
    vo: [
      'Máy chủ chạy bên ngoài Azure',
      'Cụm Kubernetes chạy bên ngoài Azure',
      'Datacenter vật lý do Microsoft sở hữu',
      'Cặp region của Azure',
    ],
    ve: [
      [
        'Azure Arc hỗ trợ Arc-enabled servers, Arc-enabled Kubernetes và Arc-enabled data services.',
        'Datacenter của chính Microsoft và cặp region là thành phần của nền tảng Azure, không phải tài nguyên của khách hàng để quản lý.',
      ],
    ],
  },

  /* ---------------- mo-servicehealth: Service Health ---------------- */
  {
    id: 1061,
    topic: 'mo-servicehealth',
    type: 'match',
    q: [
      'Match each requirement to the Azure health service that meets it.',
      'Each service may be used once, more than once, or not at all.',
    ],
    subs: [
      {
        p: 'See whether a specific virtual machine of yours is currently healthy.',
        o: ['Resource health', 'Service health', 'Azure status'],
        a: 0,
      },
      {
        p: 'Be notified about planned maintenance affecting the regions and services your subscription uses.',
        o: ['Resource health', 'Service health', 'Azure status'],
        a: 1,
      },
      {
        p: 'Check a public page showing outages across all Azure services worldwide.',
        o: ['Resource health', 'Service health', 'Azure status'],
        a: 2,
      },
    ],
    e: [
      [
        'Resource health reports on one specific resource of yours.',
        'Service health is personalised to your subscription: incidents, planned maintenance and health advisories for the services and regions you actually use.',
        'Azure status is the public global page, not personalised at all.',
      ],
    ],
    vq: [
      'Ghép mỗi yêu cầu với dịch vụ theo dõi tình trạng của Azure đáp ứng nó.',
      'Mỗi dịch vụ có thể dùng một lần, nhiều lần, hoặc không dùng.',
    ],
    vsubs: [
      {
        p: 'Xem một máy ảo cụ thể của bạn hiện có khoẻ mạnh hay không.',
        o: ['Resource health', 'Service health', 'Azure status'],
      },
      {
        p: 'Được thông báo về bảo trì theo kế hoạch ảnh hưởng tới các region và dịch vụ mà subscription của bạn đang dùng.',
        o: ['Resource health', 'Service health', 'Azure status'],
      },
      {
        p: 'Xem một trang công khai hiển thị sự cố của toàn bộ dịch vụ Azure trên thế giới.',
        o: ['Resource health', 'Service health', 'Azure status'],
      },
    ],
    ve: [
      [
        'Resource health báo cáo về đúng một tài nguyên cụ thể của bạn.',
        'Service health được cá nhân hoá theo subscription của bạn: sự cố, bảo trì theo kế hoạch và khuyến cáo cho đúng các dịch vụ và region bạn đang dùng.',
        'Azure status là trang công khai toàn cầu, hoàn toàn không cá nhân hoá.',
      ],
    ],
  },

  {
    id: 1062,
    topic: 'mo-servicehealth',
    type: 'yesno',
    q: ['Azure Service Health can send an alert when an incident affects a service that your subscription uses.'],
    subs: [{ p: '', o: ['Yes', 'No'], a: 0 }],
    e: [
      [
        'Service health alerts can be configured to notify by email, SMS, webhook or an action group whenever an incident, planned maintenance or health advisory touches your services and regions.',
      ],
    ],
    vq: ['Azure Service Health có thể gửi cảnh báo khi một sự cố ảnh hưởng tới dịch vụ mà subscription của bạn đang dùng.'],
    vsubs: [{ p: '', o: ['Yes', 'No'] }],
    ve: [
      [
        'Cảnh báo của Service health cấu hình được để báo qua email, SMS, webhook hoặc action group mỗi khi có sự cố, bảo trì theo kế hoạch hay khuyến cáo chạm tới dịch vụ và region của bạn.',
      ],
    ],
  },

  {
    id: 1063,
    topic: 'mo-servicehealth',
    type: 'single',
    q: [
      'A virtual machine has become unavailable and an administrator needs to know whether the cause is a problem on the Azure platform or a problem inside the virtual machine.',
      'Which tool should the administrator check first?',
    ],
    o: [
      ['Resource health', true],
      ['Azure Advisor', false],
      ['The pricing calculator', false],
      ['Azure Policy', false],
    ],
    e: [
      [
        'Resource health reports the current and historical health of a single resource and states whether Azure caused the unavailability — for example a host failure or planned maintenance.',
      ],
    ],
    vq: [
      'Một máy ảo đã ngừng phục vụ và quản trị viên cần biết nguyên nhân nằm ở nền tảng Azure hay ở bên trong máy ảo.',
      'Quản trị viên nên xem công cụ nào trước?',
    ],
    vo: ['Resource health', 'Azure Advisor', 'Pricing calculator', 'Azure Policy'],
    ve: [
      [
        'Resource health báo cáo tình trạng hiện tại và quá khứ của đúng một tài nguyên, đồng thời nói rõ liệu Azure có phải nguyên nhân gây gián đoạn hay không — ví dụ hỏng máy chủ vật lý hoặc bảo trì theo kế hoạch.',
      ],
    ],
  },

  /* ---------------- ex-caf: Cloud Adoption Framework ---------------- */
  {
    id: 1064,
    topic: 'ex-caf',
    type: 'single',
    q: ['What is the FIRST stage of the Microsoft Cloud Adoption Framework for Azure?'],
    o: [
      ['Strategy', true],
      ['Plan', false],
      ['Ready', false],
      ['Adopt', false],
    ],
    e: [
      [
        'The framework runs Strategy → Plan → Ready → Adopt (Migrate and Innovate) → Govern → Manage.',
        'Strategy comes first because you must establish the motivations and the business outcomes before planning anything technical.',
      ],
    ],
    vq: ['Giai đoạn ĐẦU TIÊN của Microsoft Cloud Adoption Framework for Azure là gì?'],
    vo: ['Strategy', 'Plan', 'Ready', 'Adopt'],
    ve: [
      [
        'Bộ khung chạy theo thứ tự Strategy → Plan → Ready → Adopt (Migrate và Innovate) → Govern → Manage.',
        'Strategy đứng đầu vì phải xác định động lực và kết quả kinh doanh mong muốn trước khi lập kế hoạch kỹ thuật.',
      ],
    ],
  },

  {
    id: 1065,
    topic: 'ex-caf',
    type: 'single',
    q: ['What is the purpose of the Microsoft Cloud Adoption Framework for Azure?'],
    o: [
      ['To give an organisation staged guidance for its whole journey to the cloud', true],
      ['To design the architecture of one individual workload', false],
      ['To monitor the performance of Azure resources', false],
      ['To estimate the monthly cost of an Azure deployment', false],
    ],
    e: [
      [
        'The Cloud Adoption Framework is organisation-wide guidance covering strategy, planning, readiness, migration, governance and ongoing management.',
        'Designing a single workload is the Well-Architected Framework’s job; monitoring is Azure Monitor; estimating cost is the pricing calculator.',
      ],
    ],
    vq: ['Microsoft Cloud Adoption Framework for Azure dùng để làm gì?'],
    vo: [
      'Đưa ra hướng dẫn theo từng giai đoạn cho cả hành trình lên cloud của một tổ chức',
      'Thiết kế kiến trúc cho một khối lượng công việc đơn lẻ',
      'Giám sát hiệu năng của tài nguyên Azure',
      'Ước tính chi phí hằng tháng của một hệ thống trên Azure',
    ],
    ve: [
      [
        'Cloud Adoption Framework là hướng dẫn ở tầm toàn tổ chức, bao trùm chiến lược, lập kế hoạch, chuẩn bị, di chuyển, quản trị và vận hành lâu dài.',
        'Thiết kế một khối lượng công việc đơn lẻ là việc của Well-Architected Framework; giám sát là Azure Monitor; ước tính chi phí là pricing calculator.',
      ],
    ],
  },

  {
    id: 1066,
    topic: 'ex-caf',
    type: 'yesno',
    q: [
      'The Microsoft Cloud Adoption Framework and the Azure Well-Architected Framework serve the same purpose and can be used interchangeably.',
    ],
    subs: [{ p: '', o: ['Yes', 'No'], a: 1 }],
    e: [
      [
        'They complement each other but are not interchangeable. The Cloud Adoption Framework guides the organisation’s journey to the cloud; the Well-Architected Framework guides the design of an individual workload once you are there.',
      ],
    ],
    vq: [
      'Microsoft Cloud Adoption Framework và Azure Well-Architected Framework phục vụ cùng một mục đích và dùng thay cho nhau được.',
    ],
    vsubs: [{ p: '', o: ['Yes', 'No'] }],
    ve: [
      [
        'Hai bộ khung bổ trợ nhau chứ không thay thế nhau được. Cloud Adoption Framework dẫn dắt hành trình lên cloud của cả tổ chức; Well-Architected Framework hướng dẫn thiết kế một khối lượng công việc cụ thể khi đã lên tới nơi.',
      ],
    ],
  },
];
