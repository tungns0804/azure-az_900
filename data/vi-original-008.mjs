/**
 * Bản dịch tiếng Việt cho câu 431–500 của ngân hàng gốc.
 * q = câu hỏi, o = đáp án (đúng thứ tự gốc), s = các dòng con, e = các khối giải thích.
 */
export default {
  431: {
    q: ['Bạn xem báo cáo tuân thủ quy định của công ty ở đâu?'],
    o: ['Azure Advisor', 'Azure Analysis Service', 'Azure Monitor', 'Azure Security Center'],
    e: [
      [
        'Khả năng giám sát nâng cao trong Security Center cho phép bạn theo dõi và quản lý',
        'mức độ tuân thủ và quản trị theo thời gian. Chỉ số tuân thủ tổng thể cho bạn',
        'thước đo mức độ các subscription của bạn tuân thủ những policy gắn với',
        'khối lượng công việc của mình.',
      ],
    ],
  },

  432: {
    q: ['Azure AD chịu trách nhiệm PHÂN QUYỀN (AUTHORIZATION).'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      ['Azure AD chịu trách nhiệm XÁC THỰC (AUTHENTICATION)', 'RBAC chịu trách nhiệm PHÂN QUYỀN (AUTHORIZATION)'],
    ],
  },

  433: {
    q: [
      'Bạn có một resource group tên RG1. Bạn dự định tạo virtual network và app service trong RG1.',
      'Bạn cần ngăn việc tạo máy ảo trong RG1. Giải pháp phải bảo đảm các đối tượng khác',
      'vẫn tạo được trong RG1. Bạn nên dùng gì?',
    ],
    o: ['một lock', 'một vai trò Azure', 'một tag', 'một Azure policy'],
    e: [
      [
        'Azure Policy là dịch vụ trên Azure dùng để tạo, gán và quản lý',
        'policy. Những policy này áp đặt các quy tắc và tác động khác nhau lên tài nguyên của bạn, nhờ đó',
        'tài nguyên luôn tuân thủ tiêu chuẩn của doanh nghiệp và các thoả thuận mức dịch vụ.',
      ],
    ],
  },

  434: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Sau khi tạo một máy ảo, bạn cần sửa Network Security Group (NSG) để cho phép',
      'kết nối tới cổng TCP 8080 trên máy ảo đó.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: ['Không cần thay đổi gì', 'virtual network gateway', 'virtual network', 'Route table'],
    e: [
      [
        'Khi bạn tạo một máy ảo, thiết lập mặc định là tạo một NSG gắn vào',
        'network interface được gán cho máy ảo đó. NSG hoạt động như một tường lửa.',
        'Bạn gắn được network security group vào một virtual network và/hoặc từng',
        'subnet trong virtual network đó. Bạn cũng gắn được NSG vào một network',
        'interface được gán cho máy ảo.',
      ],
    ],
  },

  435: {
    q: ['Azure Germany chỉ dành cho người cư trú hợp pháp tại Đức.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Azure Germany dành cho khách hàng và đối tác đủ điều kiện trên toàn cầu có ý định',
        'kinh doanh tại EU/EFTA, bao gồm cả Vương quốc Anh.',
      ],
    ],
  },

  436: {
    q: ['Azure Information Protection mã hoá được thứ gì?'],
    o: ['lưu lượng mạng', 'tài liệu và email', 'một Azure Storage account', 'một Azure SQL database'],
    e: [
      [
        'Azure Information Protection là giải pháp trên đám mây giúp tổ chức',
        'phân loại và (tuỳ chọn) bảo vệ tài liệu cùng email bằng cách gắn nhãn. Vì vậy',
        'Azure Information Protection mã hoá được tài liệu và email.',
      ],
    ],
  },

  437: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Bạn có một Azure virtual network tên VNET1 trong một resource group tên RG1. Bạn gán một Azure',
      'policy quy định virtual network không phải loại tài nguyên được phép trong RG1. VNET1 sẽ bị xoá',
      'tự động.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: [
      'Không cần thay đổi gì.',
      'Được tự động chuyển sang một resource group khác.',
      'Vẫn tiếp tục hoạt động bình thường.',
      'Trở thành đối tượng chỉ đọc.',
    ],
  },

  438: {
    q: ['Azure Firewall sẽ mã hoá toàn bộ lưu lượng mạng gửi từ Azure ra Internet.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Azure Firewall không mã hoá lưu lượng mạng. Nó dùng để chặn hoặc cho phép lưu lượng',
        'dựa trên địa chỉ IP nguồn/đích, cổng nguồn/đích và giao thức.',
      ],
    ],
  },

  440: {
    q: [
      'Network security group (NSG) là phần mở rộng của Application Security Group, dùng để quản lý',
      'thành phần mạng của ứng dụng.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  441: {
    q: [
      'Công ty bạn có một subscription Azure chứa tài nguyên ở nhiều region. Bạn cần',
      'bảo đảm quản trị viên chỉ tạo được tài nguyên trong những region đó. Bạn nên dùng gì?',
    ],
    o: ['một read-only lock', 'một Azure policy', 'một management group', 'một reservation'],
  },

  442: {
    q: ['Azure AD đòi hỏi phải dựng domain controller trên máy ảo Azure.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Azure Active Directory (Azure AD) là dịch vụ chạy trên đám mây. Nó không cần',
        'domain controller trên máy ảo.',
      ],
    ],
  },

  443: {
    q: ['Bạn bật được tính năng truy cập máy ảo just-in-time (JIT) bằng __________'],
    o: ['Azure JIT', 'Azure Firewall', 'Azure Front Door', 'Azure Security Center'],
    e: [
      [
        'Tính năng truy cập máy ảo just-in-time (JIT) nằm trong Azure Security Center,',
        'cho phép bạn khoá chặt lưu lượng đi vào máy ảo Azure. Việc này',
        'giảm mức độ phơi bày trước tấn công nhưng vẫn cho phép truy cập dễ dàng khi bạn cần',
        'kết nối tới máy ảo.',
      ],
    ],
  },

  445: {
    q: ['Bắt buộc dùng Azure MFA dựa trên một điều kiện:'],
    o: [
      'Azure Monitor',
      'Azure Security Center',
      'Azure Active Directory (Azure AD) Identity Protection',
      'Azure Advanced Threat Protection (ATP)',
    ],
  },

  447: {
    q: ['Azure Security Center giám sát được cả tài nguyên Azure lẫn tài nguyên tại chỗ.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Azure Security Center là hệ thống quản lý bảo mật hạ tầng hợp nhất, giúp',
        'củng cố mức độ an toàn của các data center của bạn và cung cấp khả năng chống',
        'mối đe doạ nâng cao cho khối lượng công việc lai trên đám mây — dù chúng nằm',
        'trên Azure hay không — cũng như tại chỗ.',
      ],
    ],
  },

  448: {
    q: ['Mọi tính năng của Azure Security Center đều miễn phí.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Đánh giá liên tục, khuyến nghị bảo mật và Azure secure score thì',
        'miễn phí.',
      ],
    ],
  },

  449: {
    q: ['Từ Azure Security Center, bạn tải được báo cáo Regulatory Compliance.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Microsoft Defender for Cloud']],
  },

  451: {
    q: ['Network security group (NSG) sẽ mã hoá toàn bộ lưu lượng mạng gửi từ Azure ra Internet.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Network security group không mã hoá lưu lượng mạng. Nó hoạt động tương tự',
        'một tường lửa, dùng để chặn hoặc cho phép lưu lượng dựa trên',
        'địa chỉ IP nguồn/đích, cổng nguồn/đích và giao thức.',
      ],
    ],
  },

  452: {
    q: [
      'Máy ảo Azure chạy Windows Server 2016 có thể mã hoá lưu lượng mạng gửi ra',
      'Internet.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Máy ảo không thể mã hoá lưu lượng tới một host trên Internet nếu host đó không được cấu hình để',
        'yêu cầu mã hoá.',
        'Windows Server có sẵn VPN client và cũng hỗ trợ các phương thức',
        'mã hoá khác như IPSec hoặc SSL/TLS, nên nó mã hoá được',
        'lưu lượng nếu host trên Internet được cấu hình yêu cầu hoặc chấp nhận mã hoá.',
      ],
    ],
  },

  453: {
    q: ['Azure VPN gateway sẽ mã hoá toàn bộ lưu lượng mạng gửi từ Azure ra Internet.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  454: {
    q: [
      'Công ty bạn dự định mua một subscription Azure. Chính sách hỗ trợ của công ty nêu rõ',
      'môi trường Azure phải có phương án liên hệ kỹ sư hỗ trợ qua điện thoại hoặc email. Bạn cần',
      'khuyến nghị gói hỗ trợ nào đáp ứng yêu cầu của chính sách đó.',
      'Giải pháp: Khuyến nghị gói Professional Direct.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Gói Basic không có hỗ trợ kỹ thuật từ kỹ sư.',
        'Gói Developer chỉ có hỗ trợ kỹ thuật từ kỹ sư qua email.',
        'Các gói Standard, Professional Direct và Premier đều có hỗ trợ kỹ thuật',
        'từ kỹ sư qua cả email lẫn điện thoại.',
      ],
    ],
  },

  455: {
    q: ['Tài khoản dùng thử Azure của bạn đã hết hạn tuần trước. Giờ bạn không thể __________.'],
    o: [
      'tạo thêm tài khoản người dùng Azure Active Directory (Azure AD).',
      'khởi động một máy ảo Azure đang có.',
      'truy cập dữ liệu của bạn lưu trên Azure.',
      'truy cập Azure portal.',
    ],
    e: [
      [
        'Máy ảo đã dừng (deallocated) ở trạng thái ngoại tuyến và không được gắn lên máy chủ Azure nào.',
        'Khởi động một máy ảo tức là gắn nó lên một máy chủ vật lý trước khi máy ảo chạy. Ngay khi',
        'máy ảo được gắn, nó bắt đầu bị tính tiền. Vì lý do đó, bạn không khởi động được',
        'máy ảo sau khi bản dùng thử đã hết hạn.',
      ],
    ],
  },

  456: {
    q: [
      'Phần lớn dịch vụ Azure đều đi qua giai đoạn private preview trước khi ra public preview, rồi mới',
      'tới general availability.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Phần lớn dịch vụ đi qua private preview rồi public preview trước khi phát hành rộng rãi ở',
        'general availability. Private preview chỉ dành cho một số khách hàng Azure',
        'nhất định để đánh giá. Public preview thì mọi khách hàng Azure đều dùng được.',
      ],
    ],
  },

  457: {
    q: ['Dịch vụ Azure đang ở public preview chỉ quản lý được bằng Azure CLI.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Dịch vụ Azure ở public preview quản lý được bằng các công cụ quản lý',
        'thông thường: Azure Portal, Azure CLI và PowerShell.',
      ],
    ],
  },

  458: {
    q: [
      'Chi phí của một dịch vụ Azure đang ở private preview sẽ giảm xuống khi dịch vụ đó ra',
      'general availability.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Dịch vụ ở private hoặc public preview thường được tính giá ưu đãi.',
        'Tuy nhiên chi phí sẽ TĂNG chứ không giảm khi dịch vụ được phát hành ở',
        'general availability.',
      ],
    ],
  },

  459: {
    q: [
      'Management group cho phép bạn tổ chức nhiều subscription theo hệ thống phân cấp để áp policy',
      'và quản lý tuân thủ một cách thống nhất, đúng không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Management group giúp bạn quản lý quyền truy cập, policy và mức độ tuân thủ cho nhiều',
        'subscription. Mọi subscription trong một management group đều tự động kế thừa',
        'các điều kiện áp lên management group đó.',
      ],
    ],
  },

  460: {
    q: ['Azure Service Level Agreement (SLA) cho máy ảo bảo đảm điều gì?'],
    o: ['tính sẵn có của tính năng', 'băng thông', 'thời gian hoạt động (uptime)', 'hiệu năng'],
    e: [
      [
        'Máy ảo đã dừng (deallocated) ở trạng thái ngoại tuyến và không được gắn lên máy chủ Azure nào.',
        'Khởi động một máy ảo tức là gắn nó lên một máy chủ vật lý trước khi máy ảo chạy. Ngay khi',
        'máy ảo được gắn, nó bắt đầu bị tính tiền. Vì lý do đó, bạn không khởi động được',
        'máy ảo sau khi bản dùng thử đã hết hạn.',
      ],
    ],
  },

  462: {
    q: [
      'Bạn tính phần trăm thời gian hoạt động hằng tháng như thế nào? Hãy chọn phương án phù hợp',
      'trong vùng đáp án.',
    ],
    o: ['100', '1440', '99.99 — Maximum Available Minutes'],
  },

  463: {
    q: [
      'Công ty bạn có một subscription Azure chứa những tài nguyên không dùng tới sau đây, và bạn cần',
      'giảm chi phí Azure cho công ty.',
      '20 tài khoản người dùng trong Azure Active Directory (Azure AD)',
      '•',
      'Năm nhóm trong Azure AD',
      '•',
      'Bạn không bị tính tiền cho nhóm trong Azure Active Directory',
      '10 địa chỉ IP công cộng',
      '•',
      'nên xoá các nhóm không dùng sẽ',
      '10 network interface',
      '•',
      'không làm giảm chi phí Azure.',
      'Giải pháp: Bạn xoá các nhóm không dùng tới.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  464: {
    q: [
      'Công ty bạn có một subscription Azure chứa những tài nguyên không dùng tới sau đây, và bạn cần',
      'giảm chi phí Azure cho công ty.',
      '20 tài khoản người dùng trong Azure Active Directory (Azure AD)',
      '•',
      'Năm nhóm trong Azure AD',
      '•',
      'Bạn không bị tính tiền cho network interface không dùng',
      '10 địa chỉ IP công cộng',
      '•',
      'nên xoá các network interface không dùng',
      '10 network interface',
      '•',
      'sẽ không làm giảm chi phí Azure của',
      'công ty.',
      'Giải pháp: Bạn xoá các network interface.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  465: {
    q: [
      'Công ty bạn có một subscription Azure chứa những tài nguyên không dùng tới sau đây, và bạn cần',
      'giảm chi phí Azure cho công ty.',
      '20 tài khoản người dùng trong Azure Active Directory (Azure AD)',
      '•',
      'Năm nhóm trong Azure AD',
      '•',
      'Bạn bị tính tiền cho địa chỉ IP công cộng.',
      '10 địa chỉ IP công cộng',
      '•',
      'Vì vậy xoá các địa chỉ IP công cộng không dùng',
      '10 network interface',
      '•',
      'sẽ làm giảm chi phí Azure.',
      'Giải pháp: Bạn xoá các địa chỉ IP công cộng không dùng tới.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  466: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Bạn tạo được một yêu cầu hỗ trợ Azure từ support.microsoft.com.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: [
      'Không cần thay đổi gì.',
      'Azure portal',
      'Knowledge Center',
      'Security & Compliance admin center',
    ],
    e: [
      [
        'Bạn tạo được yêu cầu hỗ trợ Azure từ mục Help and Support',
        'trong Azure portal, hoặc từ menu ngữ cảnh của một tài nguyên Azure',
        'trong phần Support + Troubleshooting.',
      ],
    ],
  },

  467: {
    q: ['Ở những gói hỗ trợ Azure nào bạn mở được yêu cầu hỗ trợ mới?'],
    o: [
      'Chỉ Premier và Professional Direct',
      'Chỉ Premier, Professional Direct và Standard',
      'Chỉ Premier, Professional Direct, Standard và Developer',
      'Premier, Professional Direct, Standard, Developer và Basic',
    ],
    e: [['Không tồn tại gói Premier.']],
  },

  469: {
    q: ['Việc tạo thêm resource group trong một subscription Azure sẽ làm phát sinh thêm chi phí.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Resource group là hộp chứa logic cho tài nguyên Azure. Bạn không phải trả tiền cho',
        'resource group.',
      ],
    ],
  },

  470: {
    q: [
      'Việc chép vài gigabit dữ liệu lên Azure từ mạng tại chỗ qua VPN sẽ làm phát sinh thêm',
      'chi phí truyền dữ liệu.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Dữ liệu đi vào qua VPN là dữ liệu “đi vào” Azure qua VPN. Bạn không',
        'bị tính chi phí truyền dữ liệu cho phần đi vào.',
      ],
    ],
  },

  471: {
    q: [
      'Việc chép vài GB dữ liệu từ Azure về mạng tại chỗ qua VPN sẽ làm phát sinh thêm chi phí',
      'truyền dữ liệu.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Dữ liệu đi ra qua VPN là dữ liệu “đi ra khỏi” Azure qua VPN. Bạn bị tính tiền',
        'cho phần dữ liệu đi ra.',
      ],
    ],
  },

  472: {
    q: ['Với Azure Reservations, bạn trả ít tiền cho máy ảo hơn so với giá pay-as-you-go.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Reservation là việc bạn cam kết trả tiền cho một tài nguyên (ví dụ một máy',
        'ảo) trong một hoặc ba năm. Đổi lại bạn được giá ưu đãi cho tài nguyên đó',
        'trong suốt kỳ hạn cam kết.',
      ],
    ],
  },

  473: {
    q: ['Hai máy ảo Azure cùng cỡ B2S sẽ có cùng mức chi phí hằng tháng.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Còn nhiều yếu tố khác ảnh hưởng tới chi phí của máy ảo, chẳng hạn các',
        'ổ đĩa ảo gắn vào máy ảo. Bạn có thể có nhiều máy',
        'ảo cùng “cỡ” (ở đây là B2S) nhưng cấu hình ổ đĩa ảo',
        'khác nhau.',
        'Region cũng ảnh hưởng tới chi phí. Cùng một tài nguyên ở các region khác nhau có thể có giá khác nhau.',
      ],
    ],
  },

  474: {
    q: ['Khi một máy ảo Azure bị dừng, bạn vẫn tiếp tục trả chi phí lưu trữ cho máy ảo đó.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        '• Máy ảo ở trạng thái Stopped và đã được gỡ tải/deallocated thì KHÔNG bị tính',
        'tiền compute.',
        '• Máy ảo ở trạng thái Stopped nhưng vẫn được nạp/allocated thì CÓ bị tính',
        'tiền.',
      ],
    ],
  },

  475: {
    q: ['Người dùng được gán vai trò Owner có thể chuyển quyền sở hữu một subscription Azure.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Bạn phải là quản trị viên của tài khoản thanh toán chứa subscription đó thì mới',
        'chuyển được subscription.',
        'Người đó có thể là Billing Administrator hoặc Global Administrator. Chủ sở hữu',
        'subscription quản lý được mọi tài nguyên và quyền bên trong subscription nhưng',
        'không chuyển được quyền sở hữu subscription.',
      ],
    ],
  },

  476: {
    q: ['Bạn có thể chuyển subscription Azure của công ty từ Free Trial sang Pay-As-You-Go.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Bạn chuyển được subscription dùng thử miễn phí sang Pay-As-You-Go. Đây là việc',
        'thường làm với những người muốn tiếp tục dùng dịch vụ Azure khi thời hạn dùng thử',
        'miễn phí kết thúc.',
      ],
    ],
  },

  477: {
    q: ['Hạn mức chi tiêu (spending limit) của Azure là cố định, không tăng cũng không giảm được.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Bạn gỡ bỏ được hạn mức chi tiêu, nhưng không tăng hay giảm nó được.']],
  },

  478: {
    q: [
      'Nếu Microsoft dự định ngừng hỗ trợ một dịch vụ Azure KHÔNG có dịch vụ kế nhiệm,',
      'Microsoft sẽ báo trước ít nhất 6 tháng.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Microsoft sẽ báo trước ít nhất 12 tháng.']],
  },

  480: {
    q: [
      'Bạn cần bảo đảm khi người dùng Azure Active Directory (Azure AD) kết nối tới Azure AD từ',
      'Internet bằng một địa chỉ IP ẩn danh, họ sẽ tự động được nhắc đổi',
      'mật khẩu. Bạn nên dùng dịch vụ Azure nào?',
    ],
    o: [
      'Azure AD Connect Health',
      'Azure AD Privileged Identity Management',
      'Azure Advanced Threat Protection (ATP)',
      'Azure AD Identity Protection',
    ],
  },

  481: {
    q: ['Phát biểu nào sau đây giải thích đúng nhất về điện toán đám mây?'],
    o: [
      'Cung cấp các dịch vụ điện toán qua Internet.',
      'Tự dựng datacenter của riêng mình.',
      'Chi phí đầu tư (Capital Expenditure).',
    ],
  },

  483: {
    q: ['Microsoft Office 365, Xbox Live và Microsoft Intune là ví dụ của Software as a Service (SaaS).'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  484: {
    q: ['Azure HDInsight là dịch vụ phân tích dựa trên Apache Spark.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  485: {
    q: [
      'Với gói tính tiền theo mức dùng, bạn trả một mức giá cố định cho toàn bộ dữ liệu gửi tới hoặc gửi đi từ máy ảo',
      'đặt trên đám mây.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  486: {
    q: [
      'Với gói tính tiền theo mức dùng, bạn giảm được tổng chi phí vì chỉ trả tiền cho phần năng lực bổ sung khi',
      'thực sự cần.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  488: {
    q: [
      'Công ty bạn có datacenter ở Los Angeles và New York. Công ty có một subscription',
      'Microsoft Azure. Bạn đang cấu hình hai datacenter thành các site geo-cluster để chống chịu sự cố.',
      'Bạn cần khuyến nghị một tuỳ chọn dự phòng lưu trữ của Azure. Bạn có các yêu cầu lưu trữ',
      'dữ liệu sau:',
      'a) Dữ liệu phải được lưu trên nhiều node.',
      'b) Dữ liệu phải được lưu trên các node ở những vị trí địa lý tách biệt.',
      'c) Dữ liệu đọc được từ cả vị trí phụ lẫn vị trí chính.',
      'Bạn nên khuyến nghị tuỳ chọn dự phòng lưu trữ nào của Azure?',
    ],
    o: [
      'Geo-redundant storage',
      'Read-only geo-redundant storage',
      'Zone-redundant storage',
      'Locally redundant storage',
    ],
  },

  490: {
    q: ['Thứ nào sau đây là một đơn vị logic của các dịch vụ Azure, gắn với một tài khoản Azure?'],
    o: ['Azure Subscription', 'Management Group', 'Resource Group'],
  },

  491: {
    q: ['Thuật ngữ nào chỉ việc bỏ tiền ra trước rồi khấu trừ khoản chi đó dần theo thời gian?'],
    o: ['Capital expenditure', 'Operational expenditure', 'Supply and demand'],
  },

  492: {
    q: ['Mô hình đám mây nào cho mức độ sở hữu và kiểm soát cao nhất?'],
    o: ['Hybrid', 'Private', 'Public'],
  },

  493: {
    q: ['Mô hình đám mây nào cho mức độ linh hoạt cao nhất?'],
    o: ['Hybrid', 'Private', 'Public'],
  },

  494: {
    q: [
      'Bạn nên dùng dịch vụ Azure nào sau đây để tải các báo cáo kiểm toán đã công bố và tìm hiểu cách',
      'Microsoft xây dựng và vận hành dịch vụ đám mây của mình?',
    ],
    o: ['Azure Policy', 'Service Trust Portal', 'Azure Monitor', 'Power BI'],
  },

  495: {
    q: [
      'Chọn một tổ chức quốc tế xây dựng các tiêu chuẩn quốc tế về quyền riêng tư và',
      'tuân thủ.',
    ],
    o: [
      'International, Governmental & Defense Agencies',
      'General Data Protection Regulation (GDPR)',
      'International Civil Defense Organization',
      'International Organization for Standardization (ISO)',
    ],
  },

  497: {
    q: [
      'Bạn cần xác định loại sự cố nào thì Azure Availability Zone giúp bảo vệ được quyền truy cập tới',
      'dịch vụ Azure. Bạn nên chọn gì?',
    ],
    o: [
      'sự cố lưu trữ',
      'sự cố của cả một region Azure',
      'sự cố của một máy chủ vật lý',
      'sự cố của một data center Azure',
    ],
  },

  498: {
    q: [
      'Dùng dịch vụ DDoS Protection kết hợp với web application firewall (WAF) để bảo vệ ở cả',
      'tầng ______ (layer 3 và 4, do DDoS Protection Standard đảm nhiệm) và tầng ____ (layer 7, do',
      'WAF đảm nhiệm).',
    ],
    o: [
      'Physical security',
      'Identity and access',
      'Perimeter',
      'Network',
      'Compute',
      'Application',
      'Data',
    ],
  },

  499: {
    q: [
      'Một công ty dự định chạy một ứng dụng trên một nhóm máy ảo. Các máy ảo này',
      'sẽ chạy trong thời gian dài. Nên cân nhắc thứ nào sau đây để',
      'giảm tổng chi phí sử dụng máy ảo?',
    ],
    o: ['Premium Disks', 'Virtual Machine Scale Sets', 'Azure Reservations', 'Azure Resource Groups'],
  },

  500: {
    q: ['Những tài nguyên nào dùng được làm nguồn (source) cho một quy tắc bảo mật chiều vào của network security group?'],
    o: [
      'Chỉ Application security group',
      'Chỉ địa chỉ IP',
      'Chỉ Service Tag',
      'Địa chỉ IP, Service tag và Application security group',
    ],
  },
};
