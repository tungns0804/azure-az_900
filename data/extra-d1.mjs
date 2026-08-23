/**
 * Câu hỏi BỔ SUNG — phần thi d1 (Cloud concepts).
 * Bù cho các chủ đề trong đề cương mà bộ slide PDF gốc không có câu nào.
 * Nguồn song ngữ: q/o/e là tiếng Anh, vq/vo/ve là bản dịch tiếng Việt.
 * Chạy `npm run build:data` để sinh public/az900-extra.json và public/az900-vi.json.
 */
export default [
  /* ---------------- cc-shared: mô hình trách nhiệm chung ---------------- */
  {
    id: 1001,
    topic: 'cc-shared',
    type: 'yesno_table',
    q: [
      'For each of the following statements about the shared responsibility model, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      {
        p: 'In a SaaS model, the customer is still responsible for managing the data and the user accounts.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'In an IaaS model, Microsoft is responsible for patching the guest operating system of your virtual machines.',
        o: ['Yes', 'No'],
        a: 1,
      },
      {
        p: 'Physical datacenter security is always the responsibility of the cloud provider.',
        o: ['Yes', 'No'],
        a: 0,
      },
    ],
    e: [
      [
        'Information and data, devices, and accounts and identities never leave the customer — they stay with you in IaaS, PaaS and SaaS alike.',
        'The guest operating system belongs to the customer in IaaS. Microsoft only manages the physical host and the hypervisor.',
        'Physical hosts, the physical network and physical datacenter security are always Microsoft’s responsibility, whatever the service type.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau về mô hình trách nhiệm chung, chọn Yes nếu phát biểu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      {
        p: 'Ở mô hình SaaS, khách hàng vẫn phải chịu trách nhiệm quản lý dữ liệu và tài khoản người dùng.',
        o: ['Yes', 'No'],
      },
      {
        p: 'Ở mô hình IaaS, Microsoft chịu trách nhiệm vá lỗi hệ điều hành khách (guest OS) của máy ảo.',
        o: ['Yes', 'No'],
      },
      {
        p: 'Bảo mật vật lý của datacenter luôn thuộc trách nhiệm của nhà cung cấp cloud.',
        o: ['Yes', 'No'],
      },
    ],
    ve: [
      [
        'Thông tin và dữ liệu, thiết bị đầu cuối, tài khoản và danh tính không bao giờ rời khỏi khách hàng — ở IaaS, PaaS hay SaaS đều là của bạn.',
        'Hệ điều hành khách thuộc về khách hàng trong IaaS. Microsoft chỉ quản lý máy chủ vật lý và lớp hypervisor.',
        'Máy chủ vật lý, mạng vật lý và bảo mật vật lý của datacenter luôn thuộc Microsoft, bất kể loại dịch vụ nào.',
      ],
    ],
  },

  {
    id: 1002,
    topic: 'cc-shared',
    type: 'single',
    q: [
      'Your company moves its email system from an on-premises Exchange Server to Microsoft 365.',
      'Which responsibility does the company KEEP after the move?',
    ],
    o: [
      ['Managing user accounts and access rights', true],
      ['Applying security patches to the mail servers', false],
      ['Maintaining the physical network hardware', false],
      ['Upgrading the mail server software version', false],
    ],
    e: [
      [
        'Microsoft 365 is SaaS, so Microsoft takes over the servers, the operating system, patching and the application itself.',
        'Accounts, identities and the data inside the mailboxes always stay with the customer — that is the one row of the shared responsibility table that never changes.',
      ],
    ],
    vq: [
      'Công ty bạn chuyển hệ thống email từ Exchange Server tại chỗ sang Microsoft 365.',
      'Sau khi chuyển, công ty vẫn GIỮ trách nhiệm nào?',
    ],
    vo: [
      'Quản lý tài khoản người dùng và quyền truy cập',
      'Vá lỗi bảo mật cho các máy chủ mail',
      'Bảo trì phần cứng mạng vật lý',
      'Nâng cấp phiên bản phần mềm máy chủ mail',
    ],
    ve: [
      [
        'Microsoft 365 là SaaS, nên Microsoft tiếp quản máy chủ, hệ điều hành, việc vá lỗi và cả bản thân ứng dụng.',
        'Tài khoản, danh tính và dữ liệu bên trong hộp thư luôn thuộc khách hàng — đây là dòng duy nhất trong bảng trách nhiệm chung không bao giờ đổi chủ.',
      ],
    ],
  },

  {
    id: 1003,
    topic: 'cc-shared',
    type: 'single',
    q: [
      'In which cloud service type does the customer carry the MOST responsibility?',
    ],
    o: [
      ['Infrastructure as a Service (IaaS)', true],
      ['Platform as a Service (PaaS)', false],
      ['Software as a Service (SaaS)', false],
      ['Function as a Service (FaaS)', false],
    ],
    e: [
      [
        'IaaS hands you a bare virtual machine: you own the operating system, the runtime, the middleware, the application and the data.',
        'PaaS takes the operating system and runtime off your plate; SaaS takes the application as well, leaving you only data and accounts.',
      ],
    ],
    vq: ['Ở loại dịch vụ cloud nào khách hàng phải chịu trách nhiệm NHIỀU NHẤT?'],
    vo: [
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
      'Function as a Service (FaaS)',
    ],
    ve: [
      [
        'IaaS giao cho bạn một máy ảo trống: bạn sở hữu hệ điều hành, runtime, middleware, ứng dụng và dữ liệu.',
        'PaaS gánh giúp phần hệ điều hành và runtime; SaaS gánh luôn cả ứng dụng, chỉ để lại dữ liệu và tài khoản cho bạn.',
      ],
    ],
  },

  /* ---------------- cc-usecase: chọn mô hình đám mây ---------------- */
  {
    id: 1004,
    topic: 'cc-usecase',
    type: 'single',
    q: [
      'A hospital must keep all patient records inside its own building because of a national regulation, but it wants to run its public appointment-booking website on Azure.',
      'Which cloud model should the hospital use?',
    ],
    o: [
      ['Hybrid cloud', true],
      ['Public cloud', false],
      ['Private cloud', false],
      ['Community cloud', false],
    ],
    e: [
      [
        'Part of the workload must stay on-premises and part of it runs in a public cloud — that combination is the definition of a hybrid cloud.',
        'A pure public cloud would break the regulation; a pure private cloud would mean building and paying for the public website infrastructure too.',
      ],
    ],
    vq: [
      'Một bệnh viện bắt buộc phải giữ toàn bộ hồ sơ bệnh nhân trong toà nhà của mình theo quy định của nhà nước, nhưng muốn chạy website đặt lịch khám công khai trên Azure.',
      'Bệnh viện nên dùng mô hình đám mây nào?',
    ],
    vo: ['Hybrid cloud', 'Public cloud', 'Private cloud', 'Community cloud'],
    ve: [
      [
        'Một phần khối lượng công việc buộc phải nằm tại chỗ, phần còn lại chạy trên public cloud — đúng định nghĩa của hybrid cloud.',
        'Public cloud thuần sẽ vi phạm quy định; private cloud thuần thì phải tự dựng và tự trả tiền cho cả hạ tầng website công khai.',
      ],
    ],
  },

  {
    id: 1005,
    topic: 'cc-usecase',
    type: 'single',
    q: [
      'A start-up has no datacenter, no hardware budget and needs to launch quickly. Its workload has no regulatory restriction on where data is stored.',
      'Which cloud model best fits?',
    ],
    o: [
      ['Public cloud', true],
      ['Private cloud', false],
      ['Hybrid cloud', false],
      ['On-premises datacenter', false],
    ],
    e: [
      [
        'A public cloud needs no capital outlay and no hardware, and resources can be created within minutes — exactly what a start-up with no datacenter needs.',
        'Private cloud and on-premises both require buying and running hardware. Hybrid only makes sense when something must stay on-premises.',
      ],
    ],
    vq: [
      'Một start-up không có datacenter, không có ngân sách mua phần cứng và cần ra mắt thật nhanh. Khối lượng công việc của họ không bị ràng buộc pháp lý về nơi lưu dữ liệu.',
      'Mô hình đám mây nào phù hợp nhất?',
    ],
    vo: ['Public cloud', 'Private cloud', 'Hybrid cloud', 'Datacenter tại chỗ'],
    ve: [
      [
        'Public cloud không cần vốn đầu tư, không cần phần cứng, và tài nguyên tạo ra trong vài phút — đúng thứ một start-up không có datacenter cần.',
        'Private cloud và tại chỗ đều buộc phải mua và vận hành phần cứng. Hybrid chỉ hợp lý khi có phần bắt buộc phải nằm tại chỗ.',
      ],
    ],
  },

  {
    id: 1006,
    topic: 'cc-usecase',
    type: 'single',
    q: [
      'A retailer runs its own datacenter, which handles normal traffic comfortably. During a two-week sale the traffic increases tenfold, and the company does not want to buy hardware that would sit idle for the rest of the year.',
      'Which approach should the retailer take?',
    ],
    o: [
      ['Extend the on-premises datacenter into a public cloud for the peak — a hybrid cloud', true],
      ['Move nothing and buy enough servers to cover the peak', false],
      ['Build a second private cloud used only during the sale', false],
      ['Replace the datacenter entirely with a community cloud', false],
    ],
    e: [
      [
        'Adding public cloud capacity only for the peak while the everyday workload stays on-premises is called cloud bursting, and it is a classic hybrid cloud scenario.',
        'Buying for the peak wastes money for fifty weeks of the year, which is exactly the CapEx problem the cloud solves.',
      ],
    ],
    vq: [
      'Một chuỗi bán lẻ tự vận hành datacenter, thừa sức đáp ứng lưu lượng thường ngày. Trong hai tuần khuyến mãi, lưu lượng tăng gấp mười lần, và công ty không muốn mua phần cứng để rồi bỏ không suốt phần còn lại của năm.',
      'Chuỗi bán lẻ nên chọn cách nào?',
    ],
    vo: [
      'Mở rộng datacenter tại chỗ sang public cloud cho giai đoạn cao điểm — tức hybrid cloud',
      'Không chuyển gì cả và mua đủ máy chủ để chịu được lúc cao điểm',
      'Dựng một private cloud thứ hai chỉ dùng trong đợt khuyến mãi',
      'Thay hẳn datacenter bằng một community cloud',
    ],
    ve: [
      [
        'Mượn thêm năng lực của public cloud chỉ trong lúc cao điểm trong khi khối lượng công việc thường ngày vẫn nằm tại chỗ gọi là cloud bursting, một tình huống hybrid cloud kinh điển.',
        'Mua sắm theo mức cao điểm là lãng phí suốt năm mươi tuần còn lại — đúng bài toán CapEx mà cloud sinh ra để giải.',
      ],
    ],
  },

  {
    id: 1007,
    topic: 'cc-usecase',
    type: 'yesno',
    q: [
      'A government agency requires complete physical control over the hardware that stores its classified data, and is willing to fund and operate that hardware itself. A private cloud is the appropriate model.',
    ],
    subs: [{ p: '', o: ['Yes', 'No'], a: 0 }],
    e: [
      [
        'A private cloud is dedicated to a single organisation and can sit in that organisation’s own datacenter, giving it full physical control at the cost of funding and running the hardware.',
      ],
    ],
    vq: [
      'Một cơ quan nhà nước yêu cầu kiểm soát vật lý hoàn toàn phần cứng lưu dữ liệu mật, và sẵn sàng tự bỏ tiền lẫn tự vận hành phần cứng đó. Private cloud là mô hình phù hợp.',
    ],
    vsubs: [{ p: '', o: ['Yes', 'No'] }],
    ve: [
      [
        'Private cloud dành riêng cho một tổ chức và có thể đặt ngay trong datacenter của tổ chức đó, cho quyền kiểm soát vật lý trọn vẹn, đổi lại là phải tự cấp vốn và tự vận hành phần cứng.',
      ],
    ],
  },

  /* ---------------- cb-reliability: độ tin cậy & khả năng dự đoán ---------------- */
  {
    id: 1008,
    topic: 'cb-reliability',
    type: 'single',
    q: [
      'Which benefit of cloud computing describes the ability of a system to recover from a failure and keep working?',
    ],
    o: [
      ['Reliability', true],
      ['Elasticity', false],
      ['Governance', false],
      ['Manageability', false],
    ],
    e: [
      [
        'Reliability is the ability to recover from failures and continue to function. In Azure it comes from a decentralised design — spreading a workload across availability zones or regions.',
        'Elasticity is about matching capacity to load, not about surviving failure.',
      ],
    ],
    vq: [
      'Lợi ích nào của điện toán đám mây mô tả khả năng hệ thống phục hồi sau sự cố và tiếp tục hoạt động?',
    ],
    vo: ['Reliability', 'Elasticity', 'Governance', 'Manageability'],
    ve: [
      [
        'Reliability là khả năng phục hồi sau sự cố và tiếp tục vận hành. Trên Azure, nó có được nhờ thiết kế phân tán — trải khối lượng công việc qua nhiều availability zone hoặc nhiều region.',
        'Elasticity nói về việc khớp năng lực với tải, không phải về việc sống sót qua sự cố.',
      ],
    ],
  },

  {
    id: 1009,
    topic: 'cb-reliability',
    type: 'multi',
    q: [
      'Predictability in the cloud has two sides. Which TWO items belong to predictable COST rather than predictable performance?',
      'Each correct answer presents a complete solution.',
    ],
    o: [
      ['The Total Cost of Ownership (TCO) calculator', true],
      ['The Azure pricing calculator', true],
      ['Autoscaling', false],
      ['Load balancing', false],
    ],
    e: [
      [
        'Predictable cost is about forecasting and tracking spend: the pricing calculator estimates a planned deployment and the TCO calculator compares on-premises spend with Azure.',
        'Autoscaling and load balancing keep performance steady as load changes — that is predictable performance.',
      ],
    ],
    vq: [
      'Khả năng dự đoán trên cloud có hai mặt. HAI mục nào thuộc về CHI PHÍ dự đoán được, chứ không phải hiệu năng dự đoán được?',
      'Mỗi đáp án đúng là một lời giải trọn vẹn.',
    ],
    vo: [
      'Total Cost of Ownership (TCO) calculator',
      'Azure pricing calculator',
      'Autoscaling',
      'Load balancing',
    ],
    ve: [
      [
        'Chi phí dự đoán được nói về việc ước tính và theo dõi chi tiêu: pricing calculator ước tính cho một hệ thống sắp dựng, còn TCO calculator so sánh chi phí tại chỗ với chi phí trên Azure.',
        'Autoscaling và load balancing giữ hiệu năng ổn định khi tải thay đổi — đó là hiệu năng dự đoán được.',
      ],
    ],
  },

  {
    id: 1010,
    topic: 'cb-reliability',
    type: 'single',
    q: [
      'Which Azure framework provides guiding principles for reliability, security, cost optimisation, operational excellence and performance efficiency?',
    ],
    o: [
      ['The Azure Well-Architected Framework', true],
      ['The Microsoft Cloud Adoption Framework', false],
      ['Azure Advisor', false],
      ['Azure Blueprints', false],
    ],
    e: [
      [
        'The Well-Architected Framework describes five pillars of a good workload design: reliability, security, cost optimisation, operational excellence and performance efficiency.',
        'The Cloud Adoption Framework is about the organisational journey to the cloud, not about designing one workload.',
      ],
    ],
    vq: [
      'Bộ khung nào của Azure đưa ra các nguyên tắc hướng dẫn về độ tin cậy, bảo mật, tối ưu chi phí, xuất sắc vận hành và hiệu quả hiệu năng?',
    ],
    vo: [
      'Azure Well-Architected Framework',
      'Microsoft Cloud Adoption Framework',
      'Azure Advisor',
      'Azure Blueprints',
    ],
    ve: [
      [
        'Well-Architected Framework mô tả năm trụ cột của một thiết kế tốt: reliability, security, cost optimisation, operational excellence và performance efficiency.',
        'Cloud Adoption Framework nói về hành trình chuyển đổi của cả tổ chức, không phải về việc thiết kế một khối lượng công việc cụ thể.',
      ],
    ],
  },

  {
    id: 1011,
    topic: 'cb-reliability',
    type: 'yesno',
    q: [
      'Deploying an application across two Azure regions increases its reliability compared with deploying it in a single region.',
    ],
    subs: [{ p: '', o: ['Yes', 'No'], a: 0 }],
    e: [
      [
        'A multi-region deployment survives the loss of a whole region, which a single-region deployment cannot. That is the highest level of reliability Azure offers.',
      ],
    ],
    vq: [
      'Triển khai một ứng dụng qua hai region của Azure làm tăng độ tin cậy so với chỉ triển khai trong một region.',
    ],
    vsubs: [{ p: '', o: ['Yes', 'No'] }],
    ve: [
      [
        'Triển khai đa region sống sót được khi mất trọn một region, điều mà triển khai một region không làm được. Đây là mức độ tin cậy cao nhất mà Azure cung cấp.',
      ],
    ],
  },

  /* ---------------- cb-security: bảo mật & quản trị ---------------- */
  {
    id: 1012,
    topic: 'cb-security',
    type: 'single',
    q: [
      'Your organisation wants every virtual machine created in Azure to be forced into an approved region and to carry a cost-centre tag.',
      'Which cloud benefit does this requirement illustrate, and which service delivers it?',
    ],
    o: [
      ['Governance, delivered by Azure Policy', true],
      ['Elasticity, delivered by virtual machine scale sets', false],
      ['Reliability, delivered by availability zones', false],
      ['Manageability, delivered by the Azure portal', false],
    ],
    e: [
      [
        'Setting and enforcing organisational rules on what may be created is governance, and Azure Policy is the service that enforces it.',
        'Governance is one of the standard cloud benefits: the cloud gives you templates, policy and drift alerts so deployments stay on standard.',
      ],
    ],
    vq: [
      'Tổ chức của bạn muốn mọi máy ảo tạo trên Azure đều bị ép nằm trong region được duyệt và phải mang tag cost-centre.',
      'Yêu cầu này minh hoạ lợi ích nào của cloud, và dịch vụ nào thực hiện nó?',
    ],
    vo: [
      'Governance, thực hiện bởi Azure Policy',
      'Elasticity, thực hiện bởi virtual machine scale sets',
      'Reliability, thực hiện bởi availability zones',
      'Manageability, thực hiện bởi Azure portal',
    ],
    ve: [
      [
        'Đặt ra và bắt buộc tuân thủ quy tắc của tổ chức về việc được tạo ra cái gì chính là governance, và Azure Policy là dịch vụ thực thi điều đó.',
        'Governance là một trong các lợi ích chuẩn của cloud: cloud cho sẵn template, policy và cảnh báo lệch chuẩn để việc triển khai luôn đúng quy định.',
      ],
    ],
  },

  {
    id: 1013,
    topic: 'cb-security',
    type: 'yesno_table',
    q: [
      'For each of the following statements about security in the cloud, select Yes if the statement is true. Otherwise, select No.',
      'NOTE: Each correct selection is worth one point.',
    ],
    subs: [
      {
        p: 'Moving to a PaaS service transfers the responsibility for patching the operating system to Microsoft.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'Using the cloud removes the customer’s responsibility for protecting its own data.',
        o: ['Yes', 'No'],
        a: 1,
      },
      {
        p: 'Cloud providers publish compliance certifications that customers can reuse as evidence in their own audits.',
        o: ['Yes', 'No'],
        a: 0,
      },
    ],
    e: [
      [
        'With PaaS the provider maintains and patches the platform, which is one of its main security benefits.',
        'Data is never handed over: protecting it stays with the customer in every service type.',
        'Microsoft publishes audit reports and certifications on the Service Trust Portal precisely so customers can reuse them.',
      ],
    ],
    vq: [
      'Với mỗi phát biểu sau về bảo mật trên đám mây, chọn Yes nếu phát biểu đúng, ngược lại chọn No.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    vsubs: [
      {
        p: 'Chuyển sang dùng dịch vụ PaaS sẽ chuyển trách nhiệm vá lỗi hệ điều hành sang cho Microsoft.',
        o: ['Yes', 'No'],
      },
      {
        p: 'Dùng cloud thì khách hàng không còn trách nhiệm bảo vệ dữ liệu của chính mình nữa.',
        o: ['Yes', 'No'],
      },
      {
        p: 'Nhà cung cấp cloud công bố các chứng nhận tuân thủ mà khách hàng dùng lại được làm bằng chứng trong cuộc kiểm toán của mình.',
        o: ['Yes', 'No'],
      },
    ],
    ve: [
      [
        'Với PaaS, nhà cung cấp bảo trì và vá lỗi nền tảng — đây là một trong các lợi ích bảo mật chính của nó.',
        'Dữ liệu thì không bao giờ được bàn giao: việc bảo vệ nó vẫn thuộc khách hàng ở mọi loại dịch vụ.',
        'Microsoft công bố báo cáo kiểm toán và chứng nhận trên Service Trust Portal đúng là để khách hàng dùng lại.',
      ],
    ],
  },

  {
    id: 1014,
    topic: 'cb-security',
    type: 'single',
    q: [
      'Which statement best describes why running a workload in the cloud can improve its security posture compared with a small on-premises datacenter?',
    ],
    o: [
      [
        'The provider invests in physical security, patching and threat detection at a scale a small datacenter cannot match',
        true,
      ],
      ['All data in the cloud is automatically classified and protected without configuration', false],
      ['The customer no longer needs to manage any identities or access rights', false],
      ['Cloud workloads cannot be reached from the public internet', false],
    ],
    e: [
      [
        'Economies of scale apply to security as well: a hyperscale provider funds physical security, continuous patching, global threat intelligence and a dedicated security team.',
        'The other options describe things the cloud never does for you — classification, identity management and network exposure all remain configuration choices.',
      ],
    ],
    vq: [
      'Phát biểu nào mô tả đúng nhất lý do chạy khối lượng công việc trên cloud có thể cải thiện mức độ an toàn so với một datacenter tại chỗ quy mô nhỏ?',
    ],
    vo: [
      'Nhà cung cấp đầu tư vào bảo mật vật lý, vá lỗi và phát hiện mối đe doạ ở quy mô mà một datacenter nhỏ không thể theo kịp',
      'Mọi dữ liệu trên cloud đều tự động được phân loại và bảo vệ mà không cần cấu hình',
      'Khách hàng không còn phải quản lý danh tính hay quyền truy cập nữa',
      'Khối lượng công việc trên cloud không thể bị truy cập từ Internet công cộng',
    ],
    ve: [
      [
        'Lợi thế kinh tế theo quy mô cũng áp dụng cho bảo mật: một nhà cung cấp hyperscale đủ sức chi cho bảo mật vật lý, vá lỗi liên tục, tình báo mối đe doạ toàn cầu và một đội bảo mật chuyên trách.',
        'Các phương án còn lại mô tả những việc cloud không bao giờ làm thay bạn — phân loại dữ liệu, quản lý danh tính và mức độ phơi ra mạng đều là lựa chọn cấu hình.',
      ],
    ],
  },

  /* ---------------- cb-manage: khả năng quản lý ---------------- */
  {
    id: 1015,
    topic: 'cb-manage',
    type: 'yesno_table',
    q: [
      'Management IN the cloud is about how you interact with Azure; management OF the cloud is about what Azure does for your resources automatically.',
      'For each of the following, select Yes if it is an example of management OF the cloud. Otherwise, select No.',
    ],
    subs: [
      {
        p: 'A virtual machine scale set automatically adds instances when CPU usage rises.',
        o: ['Yes', 'No'],
        a: 0,
      },
      {
        p: 'An administrator creates a resource group from the Azure portal.',
        o: ['Yes', 'No'],
        a: 1,
      },
      {
        p: 'Azure automatically redeploys a virtual machine on another host after a hardware failure.',
        o: ['Yes', 'No'],
        a: 0,
      },
    ],
    e: [
      [
        'Management of the cloud covers what the platform does on its own: autoscaling, deploying from a template and self-healing after a failure.',
        'Management in the cloud covers the ways you drive Azure yourself: the portal, the CLI, PowerShell, the REST API and ARM templates.',
      ],
    ],
    vq: [
      'Quản lý TRONG cloud nói về cách bạn tương tác với Azure; quản lý CỦA cloud nói về những gì Azure tự làm cho tài nguyên của bạn.',
      'Với mỗi mục sau, chọn Yes nếu đó là ví dụ của quản lý CỦA cloud, ngược lại chọn No.',
    ],
    vsubs: [
      {
        p: 'Một virtual machine scale set tự thêm instance khi mức dùng CPU tăng lên.',
        o: ['Yes', 'No'],
      },
      {
        p: 'Một quản trị viên tạo resource group từ Azure portal.',
        o: ['Yes', 'No'],
      },
      {
        p: 'Azure tự triển khai lại một máy ảo trên máy chủ khác sau khi phần cứng hỏng.',
        o: ['Yes', 'No'],
      },
    ],
    ve: [
      [
        'Quản lý của cloud bao gồm những gì nền tảng tự làm: tự động scale, triển khai theo template và tự phục hồi sau sự cố.',
        'Quản lý trong cloud bao gồm các cách bạn tự điều khiển Azure: portal, CLI, PowerShell, REST API và ARM template.',
      ],
    ],
  },

  {
    id: 1016,
    topic: 'cb-manage',
    type: 'multi',
    q: [
      'Which TWO tools let an administrator manage Azure resources from a command line?',
      'Each correct answer presents a complete solution.',
    ],
    o: [
      ['Azure CLI', true],
      ['Azure PowerShell', true],
      ['Azure Advisor', false],
      ['Azure Monitor', false],
    ],
    e: [
      [
        'The Azure CLI (az commands) and Azure PowerShell (cmdlets) are the two command-line ways to manage Azure. Both are available inside Azure Cloud Shell.',
        'Advisor gives recommendations and Monitor collects telemetry — neither is a management command line.',
      ],
    ],
    vq: [
      'HAI công cụ nào cho phép quản trị viên quản lý tài nguyên Azure từ dòng lệnh?',
      'Mỗi đáp án đúng là một lời giải trọn vẹn.',
    ],
    vo: ['Azure CLI', 'Azure PowerShell', 'Azure Advisor', 'Azure Monitor'],
    ve: [
      [
        'Azure CLI (các lệnh az) và Azure PowerShell (các cmdlet) là hai cách quản lý Azure bằng dòng lệnh. Cả hai đều có sẵn trong Azure Cloud Shell.',
        'Advisor đưa khuyến nghị còn Monitor thu thập dữ liệu đo — không cái nào là dòng lệnh quản lý.',
      ],
    ],
  },

  {
    id: 1017,
    topic: 'cb-manage',
    type: 'single',
    q: [
      'A team must create the same set of twenty Azure resources for each new customer, with identical configuration every time.',
      'Which approach gives the most repeatable result?',
    ],
    o: [
      ['Deploy from an ARM template', true],
      ['Create the resources by hand in the Azure portal', false],
      ['Ask Azure Advisor to create them', false],
      ['Create one set and copy it with Azure Monitor', false],
    ],
    e: [
      [
        'An ARM template declares the desired result as code. Deploying it repeatedly produces the same configuration every time and is idempotent.',
        'Doing it by hand in the portal invites mistakes; Advisor only recommends and Monitor only observes.',
      ],
    ],
    vq: [
      'Một nhóm phải tạo cùng một bộ hai mươi tài nguyên Azure cho mỗi khách hàng mới, cấu hình phải giống hệt nhau mỗi lần.',
      'Cách nào cho kết quả lặp lại chuẩn xác nhất?',
    ],
    vo: [
      'Triển khai từ một ARM template',
      'Tạo tay từng tài nguyên trong Azure portal',
      'Nhờ Azure Advisor tạo giúp',
      'Tạo một bộ rồi nhân bản bằng Azure Monitor',
    ],
    ve: [
      [
        'ARM template khai báo kết quả mong muốn dưới dạng mã. Triển khai lại nhiều lần vẫn ra đúng một cấu hình và mang tính idempotent.',
        'Làm tay trong portal dễ sai sót; Advisor chỉ khuyến nghị còn Monitor chỉ quan sát.',
      ],
    ],
  },

  /* ---------------- cs-usecase: chọn loại dịch vụ ---------------- */
  {
    id: 1018,
    topic: 'cs-usecase',
    type: 'single',
    q: [
      'A development team wants to publish a web application and does not want to manage servers, operating systems or patching. They still want to control the application code and its data.',
      'Which cloud service type should they choose?',
    ],
    o: [
      ['Platform as a Service (PaaS)', true],
      ['Infrastructure as a Service (IaaS)', false],
      ['Software as a Service (SaaS)', false],
      ['On-premises hosting', false],
    ],
    e: [
      [
        'PaaS gives you a managed runtime — Azure App Service in this case — where you deploy code while Microsoft handles the servers, the OS and patching.',
        'IaaS would leave the operating system to the team; SaaS would mean using finished software rather than publishing their own.',
      ],
    ],
    vq: [
      'Một nhóm phát triển muốn phát hành một ứng dụng web và không muốn quản lý máy chủ, hệ điều hành hay việc vá lỗi. Họ vẫn muốn kiểm soát mã nguồn ứng dụng và dữ liệu của nó.',
      'Họ nên chọn loại dịch vụ cloud nào?',
    ],
    vo: [
      'Platform as a Service (PaaS)',
      'Infrastructure as a Service (IaaS)',
      'Software as a Service (SaaS)',
      'Tự host tại chỗ',
    ],
    ve: [
      [
        'PaaS cho bạn một runtime có quản lý — ở đây là Azure App Service — nơi bạn chỉ triển khai mã còn Microsoft lo máy chủ, hệ điều hành và vá lỗi.',
        'IaaS sẽ để phần hệ điều hành lại cho nhóm; SaaS thì nghĩa là dùng phần mềm có sẵn chứ không phải phát hành ứng dụng của chính mình.',
      ],
    ],
  },

  {
    id: 1019,
    topic: 'cs-usecase',
    type: 'single',
    q: [
      'A company must run a legacy accounting application that requires a specific version of Windows Server and administrative access to the operating system.',
      'Which cloud service type is required?',
    ],
    o: [
      ['Infrastructure as a Service (IaaS)', true],
      ['Platform as a Service (PaaS)', false],
      ['Software as a Service (SaaS)', false],
      ['Serverless functions', false],
    ],
    e: [
      [
        'Only IaaS gives administrative access to the guest operating system and lets you choose its exact version — this is the classic lift-and-shift scenario.',
        'PaaS hides the operating system from you, and SaaS replaces the application entirely.',
      ],
    ],
    vq: [
      'Một công ty phải chạy một ứng dụng kế toán cũ, đòi hỏi đúng một phiên bản Windows Server và quyền quản trị trên hệ điều hành.',
      'Loại dịch vụ cloud nào là bắt buộc?',
    ],
    vo: [
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
      'Serverless functions',
    ],
    ve: [
      [
        'Chỉ IaaS mới cho quyền quản trị trên hệ điều hành khách và cho chọn đúng phiên bản của nó — đây là tình huống lift-and-shift kinh điển.',
        'PaaS giấu hệ điều hành đi, còn SaaS thì thay thế luôn cả ứng dụng.',
      ],
    ],
  },

  {
    id: 1020,
    topic: 'cs-usecase',
    type: 'match',
    q: [
      'Match each scenario to the cloud service type that fits it best.',
      'Each service type may be used once, more than once, or not at all.',
    ],
    subs: [
      {
        p: 'The company subscribes to Microsoft 365 so staff can use Word, Excel and Outlook without installing servers.',
        o: ['IaaS', 'PaaS', 'SaaS'],
        a: 2,
      },
      {
        p: 'The company deploys Azure virtual machines and installs its own database software on them.',
        o: ['IaaS', 'PaaS', 'SaaS'],
        a: 0,
      },
      {
        p: 'The company deploys a web API to Azure App Service and lets Microsoft manage the underlying servers.',
        o: ['IaaS', 'PaaS', 'SaaS'],
        a: 1,
      },
    ],
    e: [
      [
        'Microsoft 365 is finished software delivered over the internet, so it is SaaS.',
        'Azure virtual machines with software you install yourself are IaaS.',
        'Azure App Service hosts your code on a managed platform, which is PaaS.',
      ],
    ],
    vq: [
      'Ghép mỗi tình huống với loại dịch vụ cloud phù hợp nhất.',
      'Mỗi loại dịch vụ có thể dùng một lần, nhiều lần, hoặc không dùng.',
    ],
    vsubs: [
      {
        p: 'Công ty đăng ký Microsoft 365 để nhân viên dùng Word, Excel và Outlook mà không cần dựng máy chủ.',
        o: ['IaaS', 'PaaS', 'SaaS'],
      },
      {
        p: 'Công ty triển khai máy ảo Azure rồi tự cài phần mềm cơ sở dữ liệu lên đó.',
        o: ['IaaS', 'PaaS', 'SaaS'],
      },
      {
        p: 'Công ty triển khai một web API lên Azure App Service và để Microsoft quản lý máy chủ bên dưới.',
        o: ['IaaS', 'PaaS', 'SaaS'],
      },
    ],
    ve: [
      [
        'Microsoft 365 là phần mềm hoàn chỉnh cung cấp qua Internet, nên là SaaS.',
        'Máy ảo Azure với phần mềm bạn tự cài là IaaS.',
        'Azure App Service chạy mã của bạn trên một nền tảng có quản lý, đó là PaaS.',
      ],
    ],
  },

  {
    id: 1021,
    topic: 'cs-usecase',
    type: 'yesno',
    q: [
      'A team that wants to run small pieces of code in response to events, and pay only while the code is executing, should choose a serverless PaaS offering such as Azure Functions.',
    ],
    subs: [{ p: '', o: ['Yes', 'No'], a: 0 }],
    e: [
      [
        'Azure Functions is a serverless compute service: it runs code on demand in response to an event and bills only for the execution time and resources actually consumed.',
      ],
    ],
    vq: [
      'Một nhóm muốn chạy những đoạn mã nhỏ để phản ứng với sự kiện, và chỉ trả tiền trong lúc mã thực sự chạy, thì nên chọn một dịch vụ PaaS serverless như Azure Functions.',
    ],
    vsubs: [{ p: '', o: ['Yes', 'No'] }],
    ve: [
      [
        'Azure Functions là dịch vụ compute serverless: nó chạy mã theo yêu cầu khi có sự kiện và chỉ tính tiền cho thời gian chạy cùng tài nguyên thực sự tiêu thụ.',
      ],
    ],
  },
];
