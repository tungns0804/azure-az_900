/**
 * Bản dịch tiếng Việt cho câu 366–429 của ngân hàng gốc.
 * q = câu hỏi, o = đáp án (đúng thứ tự gốc), s = các dòng con, e = các khối giải thích.
 */
export default {
  366: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Một trong các lợi ích của Azure SQL Data Warehouse là tính sẵn sàng cao được tích hợp sẵn trong nền tảng.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: ['Không cần thay đổi gì', 'Automatic scaling', 'nén dữ liệu', 'versioning'],
  },

  367: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Azure scale set cho phép bạn mở rộng tới hàng nghìn máy ảo phục vụ tính toán hiệu năng cao và',
      'các tác vụ song song quy mô lớn.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: ['Không cần thay đổi gì', 'Automatic scaling', 'Azure Batch', 'Một availability zone'],
    e: [
      [
        'Azure Batch cho phép bạn mở rộng tới hàng nghìn máy ảo phục vụ tính toán hiệu năng cao',
        '(HPC) và các tác vụ song song quy mô lớn. Các tính năng Azure khác cũng cho phép mở rộng nhiều máy ảo, nhưng',
        'chỉ Azure Batch mới cho phép tới hàng nghìn máy ảo cho HPC.',
      ],
    ],
  },

  368: {
    q: [
      'Hai loại khách hàng nào đủ điều kiện dùng Azure Government để phát triển giải pháp đám mây?',
      'Mỗi đáp án đúng là một lời giải trọn vẹn.',
    ],
    o: [
      'một nhà thầu của chính phủ Canada',
      'một nhà thầu của chính phủ châu Âu',
      'một cơ quan nhà nước của Hoa Kỳ',
      'một nhà thầu của chính phủ Hoa Kỳ',
      'một cơ quan nhà nước của châu Âu',
    ],
  },

  369: {
    q: [
      'Bạn dự định tạo một máy ảo Azure. Bạn cần xác định dịch vụ lưu trữ nào phải được dùng',
      'để lưu các ổ đĩa dữ liệu unmanaged của máy ảo đó.',
    ],
    o: ['Containers', 'File Shares', 'Tables', 'Queues'],
    e: [
      [
        'Azure container là nền tảng cốt lõi cho các ổ đĩa ảo của Azure IaaS.',
        'Cả ổ đĩa hệ điều hành lẫn ổ đĩa dữ liệu của Azure đều được hiện thực dưới dạng ổ đĩa ảo, nơi dữ liệu được lưu bền vững trên',
        'nền tảng Azure Storage rồi phân phối tới máy ảo để đạt hiệu năng tối đa.',
      ],
    ],
  },

  370: {
    q: [
      'Quyền truy cập tài nguyên Azure chỉ có thể cấp cho người dùng Azure Active Directory (Azure AD).',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Quyền truy cập tài nguyên Azure cũng có thể được cấp bởi các nhà cung cấp danh tính khác thông qua',
        'federation. Ví dụ hay gặp là liên kết môi trường Active Directory tại chỗ',
        'với Azure AD rồi dùng liên kết đó để xác thực và phân quyền.',
      ],
      ['Azure AD chịu trách nhiệm XÁC THỰC,', 'còn RBAC lo phần PHÂN QUYỀN.'],
    ],
  },

  372: {
    q: [
      'Danh tính lưu trong Azure Active Directory (Azure AD), trong dịch vụ đám mây của bên thứ ba, và trong',
      'Active Directory tại chỗ đều dùng được để truy cập tài nguyên Azure.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Dịch vụ đám mây của bên thứ ba và Active Directory tại chỗ đều dùng được để truy cập tài nguyên',
        'Azure. Việc này gọi là “federation”.',
        'Federation là một tập hợp các domain đã thiết lập quan hệ tin cậy với nhau. Mức độ tin cậy có thể khác nhau, nhưng',
        'thường bao gồm xác thực và gần như luôn bao gồm phân quyền. Một federation điển hình',
        'có thể gồm nhiều tổ chức đã thiết lập tin cậy để cùng truy cập một tập',
        'tài nguyên.',
      ],
    ],
  },

  373: {
    q: [
      'Azure có sẵn dịch vụ xác thực và phân quyền tích hợp, cung cấp quyền truy cập an toàn tới tài nguyên',
      'Azure.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Quyền truy cập tài nguyên Azure cũng có thể được cấp bởi các nhà cung cấp danh tính khác thông qua',
        'federation. Ví dụ hay gặp là liên kết môi trường Active Directory tại chỗ',
        'với Azure AD rồi dùng liên kết đó để xác thực và phân quyền.',
      ],
    ],
  },

  374: {
    q: ['Azure Government do Microsoft vận hành.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  375: {
    q: ['Azure Government được thiết kế cho:'],
    o: ['Mọi chính phủ trên thế giới', 'Chính phủ Hoa Kỳ', 'Chính phủ Anh'],
  },

  376: {
    q: ['Azure Government chỉ dành cho các cơ quan chính phủ Hoa Kỳ và đối tác của họ.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  377: {
    q: ['Azure China do Microsoft vận hành.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  378: {
    q: ['Azure China do 21Vianet vận hành.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  379: {
    q: [
      'Các dịch vụ Microsoft Azure do 21Vianet vận hành là một phiên bản độc lập, tách biệt khỏi Azure',
      'toàn cầu.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  380: {
    q: ['Mức độ sẵn có của dịch vụ trên Azure China không giống hệt Azure toàn cầu.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  381: {
    q: [
      'Bạn dự định mở rộng mạng công ty ra Azure. Mạng này có một thiết bị VPN dùng',
      'địa chỉ IP 131.107.200.1. Bạn cần tạo một tài nguyên Azure để định danh thiết bị VPN',
      'đó. Bạn nên tạo tài nguyên Azure nào?',
    ],
    o: [
      'Virtual networks',
      'Load balancers',
      'Virtual network gateways',
      'DNS zones',
      'Local Network Gateway',
      'Traffic Manager profiles',
      'Network Watcher',
      'Application network gateways — CDN profiles — ExpressRoute circuits',
    ],
    e: [
      [
        'hoặc khi cần đổi địa chỉ IP công cộng của thiết bị VPN, bạn cũng dễ dàng',
        'cập nhật lại giá trị sau này.',
      ],
    ],
  },

  384: {
    q: [
      'Azure Advisor đưa ra khuyến nghị về cách cải thiện bảo mật cho môi trường Azure Active',
      'Directory (Azure AD).',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Azure Advisor cho bạn một cái nhìn nhất quán và tổng hợp về các khuyến nghị cho toàn bộ',
        'tài nguyên Azure. Nó tích hợp với Azure Security Center để mang tới khuyến nghị về bảo mật.',
        'Azure Advisor đưa khuyến nghị cho rất nhiều dịch vụ như Application Gateway, App',
        'Services, availability set, Azure Cache, Azure Data Factory, Azure Database for MySQL, Azure',
        'Database for PostgreSQL, địa chỉ IP công cộng của Azure, Azure Synapse Analytics, SQL server,',
        'storage account, Traffic Manager profile và máy ảo.',
        'Tuy nhiên, Azure Advisor KHÔNG đưa khuyến nghị về cách cải thiện bảo mật cho một',
        'môi trường Azure AD.',
      ],
    ],
  },

  385: {
    q: [
      'Azure Advisor đưa ra khuyến nghị về cách cấu hình thiết lập mạng trên máy ảo',
      'Azure.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Azure Advisor có đưa khuyến nghị cho máy ảo Azure nhưng không đưa',
        'khuyến nghị về cách cấu hình thiết lập mạng trên máy ảo Azure.',
      ],
    ],
  },

  386: {
    q: [
      'Azure Advisor đưa ra khuyến nghị về cách giảm chi phí vận hành máy ảo',
      'Azure.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  387: {
    q: ['Azure Advisor dùng để làm gì?'],
    o: [
      'Cung cấp tư vấn hỗ trợ về các dịch vụ Azure',
      'Gợi ý về hiệu năng khi Azure ngừng hoạt động',
      'Dịch vụ tư vấn cá nhân hoá, đưa khuyến nghị cho các dịch vụ Azure',
    ],
  },

  388: {
    q: ['Azure Advisor đưa khuyến nghị tập trung vào nhiều mảng, không chỉ riêng chi phí.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  391: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Một Availability Zone trên Azure gồm các vị trí tách biệt về mặt vật lý trải trên hai châu lục.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: [
      'Không cần thay đổi gì.',
      'trong cùng một Azure region',
      'trải trên nhiều Azure region',
      'trong cùng một Azure datacenter',
    ],
  },

  393: {
    q: ['Bạn có thể dùng Azure Cost Management để xem chi phí gắn với management group.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  394: {
    q: ['Bạn có thể dùng Azure Cost Management để xem chi phí gắn với resource group.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  395: {
    q: [
      'Bạn có thể dùng Azure Cost Management để xem mức sử dụng máy ảo trong ba tháng',
      'gần nhất.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  396: {
    q: ['Cần có gì để dùng được Azure Cost Management?'],
    o: ['Microsoft Customer Agreement', 'Software Assurance', 'một Enterprise Agreement', 'một Azure Plan'],
  },

  398: {
    q: ['Việc truyền dữ liệu giữa các dịch vụ Azure nằm ở những region khác nhau luôn miễn phí.'],
    s: [{ p: '', o: ['True', 'False'] }],
    e: [['Dữ liệu đi ra bị tính phí theo mức thông thường, còn dữ liệu đi vào thì miễn phí.']],
  },

  399: {
    q: ['Mọi region của Azure đều có nhiều datacenter.'],
    s: [{ p: '', o: ['True', 'False'] }],
    e: [
      [
        'Region là một tập hợp datacenter nằm trong một vành đai xác định theo độ trễ và nối với nhau',
        'qua một mạng nội vùng chuyên dụng có độ trễ thấp.',
      ],
    ],
  },

  400: {
    q: ['Bạn nên dùng dịch vụ nào sau đây để tổ chức tài nguyên trong một subscription Azure?'],
    o: ['Azure regions', 'Resource groups', 'Management groups', 'Administrative units'],
    e: [
      [
        'Tài nguyên Azure được gom vào resource group, đóng vai trò hộp chứa logic để triển khai và quản lý',
        'các tài nguyên Azure như web app, cơ sở dữ liệu và storage account.',
      ],
    ],
  },

  401: {
    q: ['Azure Files là ví dụ của Infrastructure as a Service (IaaS).'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  402: {
    q: ['Máy chủ DNS chạy trên một máy ảo Azure là ví dụ của Platform as a Service (PaaS).'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  403: {
    q: [
      'Nếu bạn có tài nguyên Azure triển khai ở mọi region, bạn triển khai được availability zone ở tất cả',
      'các region đó.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Không phải region nào cũng có nhiều Availability Zone.',
        'Một số region có thể chỉ có một Availability Zone.',
      ],
    ],
  },

  404: {
    q: ['Chỉ máy ảo chạy Windows Server mới tạo được trong availability zone.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Các region hỗ trợ availability zone đều hỗ trợ máy ảo Linux.']],
  },

  406: {
    q: ['Dữ liệu lưu trong một Azure Storage account luôn tự động có ít nhất ba bản sao.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Storage account có nhiều tuỳ chọn nhân bản khác nhau. Tuỳ chọn nhân bản',
        '“tối thiểu” là Locally Redundant',
        'Storage (LRS). Với LRS, dữ liệu được nhân bản đồng bộ ba lần',
        'trong region chính.',
      ],
    ],
  },

  407: {
    q: [
      'Mọi dữ liệu chép vào một Azure Storage account đều được tự động sao lưu sang một data center khác',
      'của Azure.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Dữ liệu KHÔNG được tự động sao lưu sang một Azure Data Center khác,',
        'mặc dù điều đó có thể xảy ra tuỳ theo tuỳ chọn nhân bản được cấu hình cho',
        'account.',
        'Cần hiểu rằng các tuỳ chọn nhân bản này cũng không giống với',
        'sao lưu. Sao lưu là tạo một bản sao riêng của',
        'dữ liệu, thường trên một hệ thống lưu trữ khác, và giữ nhiều',
        'phiên bản theo thời gian để phòng mất mát, hỏng hoặc xoá nhầm dữ liệu.',
        'Azure cung cấp nhiều giải pháp sao lưu để bảo vệ dữ liệu, như',
        'Azure Backup, Azure Site Recovery và Azure VM backup.',
      ],
    ],
  },

  408: {
    q: ['Một Azure Storage account chứa được tối đa 2 TB dữ liệu và tối đa một triệu file.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Giới hạn thực tế cao hơn nhiều. Giới hạn lưu trữ hiện nay là 2 PB',
        'cho Hoa Kỳ và châu Âu, và 500 TB cho mọi region khác (kể cả Anh),',
        'và không giới hạn số lượng file.',
      ],
    ],
  },

  411: {
    q: ['Mọi tài nguyên Azure triển khai vào một resource group đều phải dùng cùng một region của Azure.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Tài nguyên Azure triển khai vào cùng một resource group có thể nằm ở',
        'các region khác nhau. Resource group chỉ chứa siêu dữ liệu về',
        'các tài nguyên bên trong nó. Không có ràng buộc nào bắt tài nguyên phải cùng',
        'vị trí với resource group.',
      ],
    ],
  },

  412: {
    q: [
      'Nếu bạn gắn một tag cho resource group, mọi tài nguyên Azure trong resource group đó cũng được gắn',
      'tag ấy.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Tag không được kế thừa theo mặc định.']],
  },

  413: {
    q: [
      'Nếu bạn cấp cho một người dùng quyền quản lý một resource group, người đó quản lý được mọi tài nguyên',
      'Azure trong resource group ấy.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Quyền đặt ở mức resource group được kế thừa xuống các',
        'tài nguyên bên trong resource group đó.',
      ],
    ],
  },

  414: {
    q: ['Availability zone triển khai được ở mọi region của Azure.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Không phải region nào của Azure cũng hỗ trợ availability zone.']],
  },

  417: {
    q: [
      'Bạn có thể dùng “Azure Policy” để tải các báo cáo kiểm toán đã công bố và tìm hiểu cách Microsoft xây dựng và',
      'vận hành dịch vụ đám mây của mình không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  418: {
    q: [
      'Bạn có thể dùng “Service Trust Portal” để tải các báo cáo kiểm toán đã công bố và tìm hiểu cách Microsoft xây dựng và',
      'vận hành dịch vụ đám mây của mình không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  419: {
    q: ['Authentication (xác thực) là việc xác nhận danh tính của người muốn truy cập.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Authentication — xác nhận danh tính của người muốn truy cập.']],
  },

  420: {
    q: ['Authorization (phân quyền) là việc cấp đúng mức truy cập cho một người dùng hợp lệ.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Authorization — cấp đúng mức truy cập cho một người dùng hợp lệ.',
        'Authorization là quá trình xác định một người dùng hoặc dịch vụ hợp lệ',
        'nên có mức truy cập nào.',
      ],
    ],
  },

  421: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Bạn có một ứng dụng gồm một Azure web app với Service Level Agreement (SLA) là',
      '99,95 phần trăm và một Azure SQL database với SLA là 99,99 phần trăm. Composite SLA của',
      'ứng dụng là tích của hai SLA, tức bằng 99,94 phần trăm.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: [
      'Không cần thay đổi gì.',
      'SLA thấp nhất trong ứng dụng, tức 99,95 phần trăm',
      'SLA cao nhất trong ứng dụng, tức 99,99 phần trăm',
      'hiệu của hai SLA, tức 0,05 phần trăm',
    ],
  },

  422: {
    q: [
      'Để hoàn thành câu sau, hãy chọn phương án phù hợp trong vùng đáp án.',
      'Dữ liệu lưu ở tầng Archive của một Azure Storage account _________',
    ],
    o: [
      'truy cập được bất cứ lúc nào bằng azcopy.exe.',
      'chỉ đọc được bằng Azure Backup.',
      'phải được restore trước khi truy cập được.',
      'phải được rehydrate trước khi truy cập được.',
    ],
    e: [
      [
        'Azure storage có nhiều tầng truy cập khác nhau: hot, cool và archive.',
        'Tầng archive có chi phí lưu trữ thấp nhất. Nhưng chi phí lấy dữ liệu ra lại cao hơn so với',
        'tầng hot và cool. Lấy dữ liệu ở tầng archive có thể mất vài giờ.',
        'Khi một blob đang nằm ở archive storage, dữ liệu của nó ở trạng thái ngoại tuyến, không đọc, không ghi đè, không sửa được.',
        'Muốn đọc hoặc tải một blob ở archive, trước hết bạn phải rehydrate nó về một tầng trực tuyến.',
      ],
    ],
  },

  423: {
    q: [
      'Khi cần uỷ quyền cho nhiều máy ảo Azure cùng lúc, bạn phải triển khai các máy ảo Azure',
      'vào thứ nào sau đây?',
    ],
    o: [
      'Azure region',
      'Azure availability zone',
      'Azure resource group',
      'Azure Resource Manager template',
    ],
  },

  425: {
    q: [
      'Azure Active Directory (Azure AD) cung cấp dịch vụ xác thực cho tài nguyên đặt trên Azure và',
      'Microsoft 365.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  427: {
    q: [
      'Azure Active Directory (Azure AD) đòi hỏi phải dựng domain controller trên máy ảo',
      'Azure.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  428: {
    q: ['Mỗi tài khoản người dùng trong Azure Active Directory (Azure AD) chỉ được gán đúng một license.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  429: {
    q: [
      'Danh tính lưu trong Active Directory tại chỗ có thể đồng bộ lên Azure Active Directory',
      '(Azure AD).',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },
};
