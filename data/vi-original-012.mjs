/**
 * Bản dịch tiếng Việt cho câu 711–765 của ngân hàng gốc.
 * q = câu hỏi, o = đáp án (đúng thứ tự gốc), s = các dòng con, e = các khối giải thích.
 */
export default {
  711: {
    q: [
      'Service Level Agreement (SLA) của Azure Active Directory Premium P2 giống hệt SLA',
      'của Azure Active Directory Free.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Bản Free của Azure Active Directory không có SLA.']],
  },

  712: {
    q: [
      'Mọi khách hàng trả phí của Azure đều nhận được credit nếu phần trăm thời gian hoạt động hằng tháng thấp hơn',
      'mức được bảo đảm trong Service Level Agreement (SLA).',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Bạn yêu cầu được credit nếu mức sẵn sàng rơi xuống dưới SLA. Mức credit tuỳ thuộc vào',
        'mức sẵn sàng thực tế. Ví dụ: bạn được 25% credit nếu mức sẵn sàng dưới 99,9%, 50% credit',
        'nếu dưới 99%, và 100% nếu dưới 95%.',
      ],
    ],
  },

  714: {
    q: [
      'Bạn đã hoàn tất việc chuyển các máy chủ và quy trình cốt lõi của tổ chức sang máy ảo',
      'trên đám mây.',
      'Dự án cuối cùng của bạn là chuyển một tác vụ xử lý theo lô hằng tuần, tác vụ này phụ thuộc vào driver của hệ điều hành',
      'để in báo cáo PDF. Bạn cần đáp ứng yêu cầu này đồng thời giảm thiểu chi phí.',
      'Bạn nên làm gì?',
    ],
    o: [
      'Chạy tác vụ xử lý lô bằng spot instance.',
      'Chạy tác vụ lô trên một máy ảo chuyên dụng khi cần.',
      'Cấu hình cụm máy ảo để tự mở rộng phục vụ xử lý lô.',
      'Chuyển việc xử lý lô sang compute serverless.',
    ],
  },

  715: {
    q: [
      'Công ty bạn triển khai tài nguyên trên Azure. Theo mô hình trách nhiệm chung, bạn sẽ phải',
      'thực hiện tác vụ nào?',
    ],
    o: [
      'Cấu hình kết nối giữa các region.',
      'Quản lý quyền truy cập tài nguyên trong data center.',
      'Nâng cấp RAM cho hệ thống ảo hoá.',
      'Cài các bản cập nhật quan trọng lên máy ảo.',
    ],
  },

  716: {
    q: ['ExpressRoute hoạt động ở tầng OSI nào?'],
    o: ['2', '3', '5', '7'],
  },

  717: {
    q: ['Bạn dùng được horizontal scaling cho web server.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['xác định khi nào Azure nên tự động thêm và bớt instance máy ảo (VM).']],
  },

  718: {
    q: ['Bạn có thể thay đổi kích thước ổ đĩa theo nhu cầu trên mail server nếu lượng email tăng lên.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  719: {
    q: ['Bạn loại bỏ được hoàn toàn chi phí nhân sự CNTT.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Các tác vụ của Infrastructure-as-a-Service (IaaS)']],
  },

  720: {
    q: [
      'Dịch vụ nào cho phép mở rộng mạng tại chỗ của bạn vào đám mây Microsoft qua một kết nối',
      'riêng, với sự hỗ trợ của nhà cung cấp kết nối?',
    ],
    o: ['Azure Network', 'ExpressRoute', 'Azure VPN Network', 'Azure CDN'],
  },

  721: {
    q: [
      'Bạn có một ứng dụng kế toán tên App1 dùng một cơ sở dữ liệu cũ. Bạn dự định chuyển',
      'App1 lên đám mây. Bạn nên dùng mô hình dịch vụ nào?',
    ],
    o: [
      'platform as a service (PaaS)',
      'infrastructure as a service (IaaS)',
      'software as a service (SaaS)',
    ],
  },

  722: {
    q: ['Kỳ hạn dài nhất bạn mua được cho Azure Reserved VM Instances là bao lâu?'],
    o: ['Ba năm', 'Bốn năm', 'Năm năm', 'Mười năm'],
  },

  723: {
    q: [
      'Công ty bạn dự định triển khai một giải pháp Trí tuệ nhân tạo (AI) trên Azure. Công ty nên',
      'dùng gì để xây dựng, kiểm thử và triển khai giải pháp phân tích dự đoán?',
    ],
    o: ['Azure Logic Apps', 'Azure Machine Learning designer', 'Azure Batch', 'Azure Cosmos DB'],
  },

  725: {
    q: [
      'Công ty bạn có nhiều đơn vị kinh doanh. Mỗi đơn vị cần 20 tài nguyên Azure khác nhau',
      'cho hoạt động hằng ngày. Tất cả các đơn vị đều cần cùng loại tài nguyên Azure. Bạn cần',
      'khuyến nghị một giải pháp để tự động hoá việc tạo các tài nguyên Azure đó.',
      'Bạn nên đưa gì vào khuyến nghị?',
    ],
    o: [
      'Azure Resource Manager template',
      'Virtual machine scale set',
      'Dịch vụ Azure API Management',
      'Management group',
    ],
    e: [
      [
        'Azure Resource Manager template cho phép bạn tự động hoá việc tạo các',
        'tài nguyên Azure. Triển khai tài nguyên qua template được gọi là “Infrastructure',
        'as code”.',
      ],
    ],
  },

  726: {
    q: ['Những tài nguyên nào dùng được làm nguồn (source) cho một quy tắc bảo mật chiều vào của network security group?'],
    o: [
      'Chỉ Service Tag',
      'Địa chỉ IP, Service tag và Application security group',
      'Chỉ Application security group',
      'Chỉ địa chỉ IP',
    ],
    e: [
      [
        'Có thể là Any, một địa chỉ IP đơn lẻ, một khối CIDR (classless inter-domain routing)',
        '(ví dụ 10.0.0.0/24), một service tag, hoặc một application security group.',
      ],
    ],
  },

  727: {
    q: ['Azure Active Directory (Azure AD) được dùng để quản lý khoá mã hoá của API.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Azure AD là dịch vụ quản lý danh tính và truy cập trên đám mây của Microsoft.',
        'Azure Active Directory (Azure AD) không dùng để quản lý Application Programming',
        'Interface (API).',
      ],
    ],
  },

  728: {
    q: ['Mã hoá của Azure Storage được bật mặc định và không tắt được.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Mã hoá của Azure Storage được bật mặc định và không tắt được. Mã hoá của Azure',
        'Storage là tính năng mã hoá dữ liệu của bạn bằng chuẩn Advanced',
        'Encryption Standard (AES) 256-bit trước khi lưu vào Azure Storage.',
      ],
    ],
  },

  730: {
    q: ['Azure ExpressRoute được dùng để bảo mật lưu lượng giữa các virtual network.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  731: {
    q: [
      'ExpressRoute là dịch vụ Azure cho phép bạn tạo kết nối riêng giữa các datacenter của Microsoft',
      'và hạ tầng đặt tại chỗ của bạn hoặc trong một cơ sở colocation.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  732: {
    q: ['Kết nối ExpressRoute đi qua Internet công cộng.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  733: {
    q: [
      'Bạn có thể dùng cùng một kết nối mạng riêng cho virtual network và các dịch vụ Azure khác',
      'cùng lúc không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  734: {
    q: [
      'Kết nối point-to-site VPN cho phép bạn thiết lập một kết nối riêng và an toàn giữa',
      'người dùng và virtual network.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  735: {
    q: ['Azure Blob Storage là'],
    o: [
      'kho dữ liệu để xếp hàng và chuyển tin nhắn một cách tin cậy giữa các ứng dụng.',
      'file share có thể map thành ổ đĩa mạng',
      'kho Key/Attribute cho dữ liệu có cấu trúc nhưng phi quan hệ.',
      'dịch vụ lưu trữ được tối ưu cho các đối tượng rất lớn như file video và ảnh bitmap.',
    ],
  },

  736: {
    q: ['Những phát biểu nào về Cosmos DB là đúng? (Chọn HAI)'],
    o: [
      'Việc chọn API quyết định loại account',
      'Có thể định nghĩa quan hệ giữa các bảng',
      'Dùng một schema có cấu trúc cố định',
      'Mã hoá dữ liệu ở trạng thái nghỉ được bật mặc định',
    ],
  },

  737: {
    q: [
      'Dịch vụ nào dưới đây là dịch vụ bảo mật mạng có quản lý của Microsoft trên Azure, bảo vệ tài nguyên',
      'trong Azure Virtual Network?',
    ],
    o: ['Azure VNET', 'Azure Firewall', 'Network Security Group', 'Application Security Group'],
  },

  738: {
    q: [
      'Content Delivery Network (CDN) cho phép bạn giảm lưu lượng đổ vào web server đối với các file tĩnh,',
      'không thay đổi như ảnh, video và PDF.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  739: {
    q: [
      'Azure Active Directory là một network gateway cân bằng tải cho việc đăng nhập của người dùng bằng CDN (Content',
      'Delivery Network).',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  741: {
    q: ['Những dịch vụ nào thuộc dịch vụ Azure Storage Account?'],
    o: [
      'Azure Table Storage',
      'Azure File Storage',
      'Azure Hard drive',
      'Azure Queue Storage',
      'Azure Disk Storage',
      'Azure Blob Storage',
    ],
  },

  743: {
    q: ['Có ba khoá trong mục properties của Azure Cognitive Services, đúng không?'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Chỉ có hai khoá trong mục properties của Azure Cognitive Services.']],
  },

  744: {
    q: [
      'Bạn dùng Network Security Group để cấu hình bảo mật mạng như một phần mở rộng theo cấu trúc của',
      'ứng dụng.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Application Security Group']],
  },

  745: {
    q: [
      'Dịch vụ Microsoft Sentinel là một hệ thống Security information and event management (SIEM)',
      'và Security orchestration, automation, and response (SOAR) chạy trên đám mây, có khả năng mở rộng.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  746: {
    q: ['Vì sao trong mục properties của Azure Cognitive Services lại có hai khoá?'],
    o: [
      'Khoá cho nền tảng Windows và Linux',
      'Để cất giữ khoá dự phòng',
      'Để định kỳ tạo lại khoá phục vụ bảo mật',
      'Để tăng hiệu năng',
    ],
  },

  747: {
    q: ['Một cơ sở dữ liệu Microsoft SQL Server chạy trên máy ảo trên đám mây là ví dụ của:'],
    o: [
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
    ],
  },

  748: {
    q: [
      'Dịch vụ lưu trữ nào dưới đây phù hợp nhất để phục vụ ảnh hoặc tài liệu trực tiếp cho trình duyệt, và để',
      'phát video cùng âm thanh dạng luồng?',
    ],
    o: ['Azure Blob Storage', 'Azure File Storage', 'Virtual Machine Disks', 'Queue Storage'],
  },

  749: {
    q: [
      'Một cơ sở dữ liệu Microsoft SQL Server chạy trên đám mây và được Azure quản lý việc cập nhật',
      'phần mềm là ví dụ của:',
    ],
    o: [
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
    ],
  },

  750: {
    q: [
      'Bạn cần thu thập và tự động phân tích sự kiện bảo mật từ Azure Active Directory (Azure',
      'AD). Bạn nên dùng gì?',
    ],
    o: ['Azure Synapse Analytics', 'Azure AD Connect', 'Azure Key Vault', 'Azure Sentinel'],
  },

  751: {
    q: ['Công cụ tự động nào của Azure giám sát được mọi dịch vụ và phản ứng nhanh với mối đe doạ?'],
    o: [
      'Microsoft Authenticator',
      'Microsoft Defender for Cloud',
      'Multi Factor Authentication',
      'Azure Firewall',
    ],
  },

  752: {
    q: [
      'Microsoft Defender for Cloud là nền tảng bảo vệ ứng dụng gốc đám mây (CNAPP) với một bộ',
      'biện pháp và thực hành bảo mật nhằm bảo vệ ứng dụng chạy trên đám mây khỏi nhiều mối đe doạ mạng',
      'và lỗ hổng khác nhau.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  753: {
    q: ['Dịch vụ nào giúp bạn đạt được những mục tiêu đó chính là secure score.'],
    o: [
      'Microsoft Authenticator',
      'Microsoft Defender for Cloud',
      'Multi Factor Authentication',
      'Azure score board',
    ],
  },

  754: {
    q: ['Defender for Cloud liên tục đánh giá các tài nguyên trải trên nhiều đám mây của bạn để tìm vấn đề bảo mật.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  755: {
    q: [
      'Dịch vụ Azure nào là dịch vụ tường lửa mạng thông minh, gốc đám mây, cung cấp',
      'khả năng chống mối đe doạ cho khối lượng công việc chạy trên Azure?',
    ],
    o: [
      'Microsoft Authenticator',
      'Microsoft Defender for Cloud',
      'Multi Factor Authentication',
      'Azure Firewall',
    ],
  },

  756: {
    q: [
      'Dịch vụ Azure nào là dịch vụ bảo mật mạng có quản lý, chạy trên đám mây, bảo vệ tài nguyên trong',
      'Azure Virtual Network của bạn?',
    ],
    o: [
      'Microsoft Authenticator',
      'Microsoft Defender for Cloud',
      'Multi Factor Authentication',
      'Azure Firewall',
    ],
  },

  757: {
    q: ['Azure Firewall là tường lửa stateful đầy đủ.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  758: {
    q: ['Azure Firewall có khả năng mở rộng.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  759: {
    q: [
      'Theo mặc định, mọi lưu lượng đi qua tường lửa đều bị chặn; phải thêm quy tắc thì lưu lượng mới',
      'đi qua được.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Khi vừa được cấp phát, Azure Firewall sẽ chặn mọi lưu lượng vì quy tắc mặc định',
        'được đặt là “deny”.',
      ],
    ],
  },

  760: {
    q: [
      'Bạn có một môi trường Azure gồm 10 virtual network và 100 máy ảo. Bạn',
      'cần giới hạn lượng lưu lượng đi vào toàn bộ các Azure virtual network. Bạn nên tạo gì?',
    ],
    o: [
      'một application security group (ASG)',
      '10 virtual network gateway',
      '10 mạch Azure ExpressRoute',
      'một Azure firewall',
    ],
    e: [
      [
        'Azure firewall là tính năng trên Azure cho phép bạn kiểm soát lưu lượng mạng đi vào và',
        'đi ra khỏi tài nguyên Azure. Bạn tạo được quy tắc chỉ định',
        'cổng, giao thức và nguồn được phép truy cập virtual network và',
        'máy ảo của mình, và bạn áp được tường lửa đó cho toàn bộ virtual',
        'network trong môi trường.',
        'Nó cho phép bạn tạo quy tắc lọc mạng ở cấp mạng, nhờ đó giới hạn được',
        'lưu lượng cho cả virtual network chứ không chỉ cho một máy ảo đơn lẻ.',
      ],
    ],
  },

  761: {
    q: [
      'Nếu bạn cần kiểm soát truy cập cơ bản ở mức mạng (dựa trên địa chỉ IP và giao thức TCP hoặc UDP),',
      'bạn nên dùng dịch vụ nào?',
    ],
    o: [
      'Microsoft Defender',
      'Application security group (ASG)',
      'Network security group (NSG)',
      'Azure Firewall',
    ],
  },

  762: {
    q: [
      'Bạn dùng dịch vụ nào cho tính năng truy cập just-in-time (JIT) nhằm bảo vệ máy ảo Azure',
      '(VM) khỏi truy cập mạng trái phép?',
    ],
    o: [
      'Application security group (ASG)',
      'Network security group (NSG)',
      'Azure Firewall',
      'Microsoft Defender',
    ],
  },

  763: {
    q: [
      'Cross-Origin Resource Sharing (CORS) là cơ chế cho phép các domain cấp quyền cho nhau',
      'để truy cập tài nguyên của nhau.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  764: {
    q: [
      'Dịch vụ Azure nào cho phép bạn lưu secret của ứng dụng ở một nơi tập trung trên đám mây,',
      'kiểm soát quyền truy cập một cách an toàn, và ghi log truy cập?',
    ],
    o: ['Azure Firewall', 'Azure Key Vault', 'Microsoft Defender'],
  },

  765: {
    q: [
      'Dịch vụ nào mang lại trải nghiệm Multi-Factor Authentication thân thiện, hoạt động được với cả',
      'Microsoft Azure Active Directory lẫn tài khoản Microsoft, và hỗ trợ cả thiết bị đeo cùng',
      'phê duyệt bằng vân tay?',
    ],
    o: ['Azure Firewall', 'Azure Key Vault', 'Microsoft Defender', 'Microsoft Authenticator'],
  },
};
