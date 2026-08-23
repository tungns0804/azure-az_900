/**
 * Bản dịch tiếng Việt cho câu 1–40 của ngân hàng gốc.
 * q = câu hỏi, o = đáp án (đúng thứ tự gốc), s = các dòng con, e = các khối giải thích.
 * Giữ nguyên tiếng Anh cho tên dịch vụ và thuật ngữ riêng của Azure.
 */
export default {
  1: {
    q: ['Phát biểu nào sau đây là đúng?'],
    o: [
      'Private Cloud = Public Cloud + Hybrid Cloud',
      'Public Cloud = Hybrid Cloud + Private Cloud',
      'Hybrid Cloud = Private Cloud + Public Cloud',
    ],
    e: [
      ['Private cloud là nơi dịch vụ điện toán được cung cấp cho người dùng qua Internet hoặc qua một mạng nội bộ riêng.'],
      ['Public cloud thuộc sở hữu và do các nhà cung cấp dịch vụ cloud bên thứ ba vận hành, ví dụ Azure, AWS hay GCP.'],
      ['Hybrid', 'Private'],
      ['Public'],
      ['Đúng như tên gọi, hybrid cloud là sự kết hợp của public cloud và private cloud. Hybrid cloud thường mở rộng một kết nối từ datacenter tại chỗ ra public cloud.'],
    ],
  },

  2: {
    q: ['Điều nào sau đây mô tả một lợi ích của dịch vụ đám mây?'],
    o: ['Economies of scale (lợi thế kinh tế theo quy mô)', 'Khối lượng công việc cố định', 'Chi phí không dự đoán được'],
    e: [
      ['Economies of scale là khả năng làm mọi việc rẻ hơn và hiệu quả hơn khi vận hành ở quy mô lớn so với khi vận hành ở quy mô nhỏ.'],
    ],
  },

  3: {
    q: ['Khi triển khai một giải pháp SaaS (Software as a Service), bạn chịu trách nhiệm việc gì?'],
    o: [
      'Cài bản vá cho hệ điều hành',
      'Cấu hình tính sẵn sàng cao (High Availability)',
      'Cấu hình chính giải pháp SaaS đó',
      'Cài đặt giải pháp SaaS',
    ],
  },

  4: {
    q: ['Thuật ngữ nào chỉ việc bỏ tiền ra trước rồi khấu trừ khoản chi đó dần theo thời gian?'],
    o: ['Capital expenditure', 'Operational expenditure', 'Supply and demand — Mẹo thi'],
    e: [
      ['Capital expenditure = CapEx', 'Operational/Operating expenditure = OpEx'],
    ],
  },

  5: {
    q: ['Trong các lựa chọn dưới đây, đâu là một lợi thế của việc chuyển hạ tầng lên Azure?'],
    o: [
      'Việc chuyển đổi làm giảm chi phí đầu tư (CapEx).',
      'Việc chuyển đổi làm giảm chi phí vận hành (OpEx).',
      'Việc chuyển đổi cho phép kiểm soát hoàn toàn tài nguyên hạ tầng.',
    ],
  },

  6: {
    q: [
      'Hạ tầng datacenter, chi phí máy chủ, chi phí lưu trữ, chi phí mạng, chi phí sao lưu và lưu trữ dài hạn, chi phí',
      'duy trì hoạt động liên tục và khôi phục sau thảm hoạ, chi phí nhân sự kỹ thuật là ví dụ của loại chi phí nào?',
    ],
    o: ['Capital expenditure (CapEx)', 'Operational expenditure (OpEx)'],
  },

  7: {
    q: [
      'Capital Expenditure là việc bỏ tiền trước để mua hạ tầng vật lý, sau đó khấu trừ dần khoản chi trả trước đó',
      'theo thời gian.',
    ],
    s: [{ p: '', o: ['True', 'False'] }],
  },

  8: {
    q: ['Operational Expenditure là việc bỏ tiền mua dịch vụ hoặc sản phẩm ngay bây giờ và bị tính tiền ngay bây giờ.'],
    s: [{ p: '', o: ['True', 'False'] }],
  },

  9: {
    q: ['Azure Reserved VM Instances là ví dụ của mô hình giá CapEx.'],
    s: [{ p: '', o: ['True', 'False'] }],
  },

  10: {
    q: [
      'Thuật ngữ nào sau đây chỉ việc giữ cho một dịch vụ luôn sẵn sàng, không có thời gian ngừng hoạt động trong',
      'một khoảng thời gian dài?',
    ],
    o: ['Agility', 'Fault tolerance', 'High availability'],
    e: [
      [
        '• Agility: khả năng phát triển, kiểm thử và phát hành ứng dụng thật nhanh trong môi trường đám mây.',
        '• Fault tolerance: khả năng hệ thống tiếp tục hoạt động khi một số thành phần của nó gặp sự cố.',
        '• High availability: giữ cho dịch vụ chạy liên tục trong thời gian dài, thời gian ngừng rất ít, tuỳ theo từng dịch vụ cụ thể.',
      ],
    ],
  },

  11: {
    q: ['Mô hình đám mây nào cho mức độ sở hữu và kiểm soát cao nhất?'],
    o: ['Hybrid Cloud', 'Private Cloud', 'Public Cloud'],
  },

  12: {
    q: ['Mô hình đám mây nào cho mức độ linh hoạt cao nhất?'],
    o: ['Hybrid Cloud', 'Private Cloud', 'Public Cloud'],
  },

  13: {
    q: ['Điều nào sau đây mô tả đúng public cloud?'],
    o: [
      'Thuộc sở hữu và do chính tổ chức sử dụng tài nguyên của đám mây đó vận hành.',
      'Cho phép tổ chức chạy ứng dụng trên đám mây hoặc tại chỗ.',
      'Cung cấp tài nguyên và dịch vụ cho nhiều tổ chức và người dùng, kết nối qua một đường mạng an toàn.',
    ],
  },

  14: {
    q: [
      'Bạn có các ứng dụng cũ đòi hỏi phần cứng mainframe chuyên dụng, đồng thời có những ứng dụng dùng chung',
      'mới hơn. Mô hình triển khai đám mây nào phù hợp nhất với bạn?',
    ],
    o: ['Hybrid Cloud', 'Private Cloud', 'Public Cloud'],
  },

  15: {
    q: ['Microsoft Office 365 là ví dụ của mô hình nào?'],
    o: [
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
    ],
  },

  16: {
    q: ['Điều nào sau đây mô tả đúng Platform as a Service (PaaS)?'],
    o: [
      'Người dùng chịu trách nhiệm mua, cài đặt, cấu hình và quản lý phần mềm của chính mình (hệ điều hành, middleware và ứng dụng).',
      'Người dùng tạo và triển khai ứng dụng thật nhanh mà không phải bận tâm quản lý hạ tầng bên dưới.',
      'Người dùng trả phí thuê bao theo năm hoặc theo tháng.',
    ],
  },

  17: {
    q: ['Loại dịch vụ đám mây nào đòi hỏi người dùng phải tự quản lý nhiều nhất?'],
    o: [
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
    ],
  },

  18: {
    q: [
      'Bạn đang phát triển một ứng dụng và muốn tập trung vào việc lập trình, kiểm thử và triển khai. Bạn',
      'không muốn bận tâm tới việc quản lý phần cứng hay phần mềm bên dưới. Loại dịch vụ đám mây',
      'nào phù hợp nhất với bạn?',
    ],
    o: [
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
    ],
  },

  19: {
    q: [
      'Ở loại mô hình đám mây nào thì toàn bộ tài nguyên phần cứng thuộc sở hữu của bên thứ ba và được dùng chung',
      'giữa nhiều khách thuê (tenant)?',
    ],
    o: ['Hybrid Cloud', 'Private Cloud', 'Public Cloud'],
  },

  20: {
    q: ['Bạn đang chạy một máy ảo trên Azure Cloud. Mô hình nào phản ánh cách tài nguyên đó được quản lý?'],
    o: [
      'Mô hình trách nhiệm của người dùng',
      'Mô hình trách nhiệm của Azure',
      'Mô hình trách nhiệm chung (shared responsibility)',
    ],
  },

  21: {
    q: [
      'Một quản trị viên Azure dự định chạy một script PowerShell để tạo tài nguyên Azure. Bạn cần',
      'khuyến nghị cấu hình máy tính nào để chạy script đó.',
      'Giải pháp: Chạy script từ một máy tính chạy Linux và đã cài bộ công cụ Azure CLI. Giải pháp này có',
      'đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  22: {
    q: [
      'Một quản trị viên Azure dự định chạy một script PowerShell để tạo tài nguyên Azure. Bạn cần',
      'khuyến nghị cấu hình máy tính nào để chạy script đó.',
      'Giải pháp: Chạy script từ một máy tính chạy Chrome OS và dùng Azure Cloud Shell. Giải pháp này có đạt',
      'yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  23: {
    q: [
      'Một quản trị viên Azure dự định chạy một script PowerShell để tạo tài nguyên Azure. Bạn cần',
      'khuyến nghị cấu hình máy tính nào để chạy script đó.',
      'Giải pháp: Chạy script từ một máy tính chạy macOS và đã cài PowerShell Core 6.0. Giải pháp này có',
      'đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  24: {
    q: [
      'Một quản trị viên Azure dự định chạy một script PowerShell để tạo tài nguyên Azure. Bạn cần',
      'khuyến nghị cấu hình máy tính nào để chạy script đó.',
      'Giải pháp: Bạn dùng Bash trong Azure Cloud Shell. Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  25: {
    q: [
      'Một quản trị viên Azure dự định chạy một script PowerShell để tạo tài nguyên Azure. Bạn cần',
      'khuyến nghị cấu hình máy tính nào để chạy script đó.',
      'Giải pháp: Bạn dùng một máy tính chạy Windows 10 và đã cài module Azure PowerShell. Giải pháp này có',
      'đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  26: {
    q: [
      'Công ty bạn vận hành một ứng dụng kế toán tên App1 mà mọi khách hàng của công ty đều dùng.',
      'App1 có mức sử dụng thấp trong ba tuần đầu mỗi tháng và rất cao trong tuần cuối mỗi tháng. Lợi ích nào',
      'của Azure Cloud Services hỗ trợ việc quản lý chi phí cho kiểu sử dụng này?',
    ],
    o: ['high availability', 'high latency', 'elasticity', 'load balancing'],
  },

  27: {
    q: [
      'Bạn dự định triển khai vài máy ảo Azure. Bạn cần kiểm soát các cổng mà thiết bị trên Internet',
      'được phép dùng để truy cập các máy ảo đó. Bạn nên dùng gì?',
    ],
    o: [
      'network security group (NSG)',
      'Azure Active Directory (Azure AD)',
      'Network gateway',
      'Azure key vault',
    ],
    e: [
      [
        '• NSG: Bạn dùng Azure network security group để lọc lưu lượng mạng giữa các tài nguyên Azure trong một virtual network.',
        '• Azure AD: Azure Active Directory là dịch vụ quản lý danh tính và truy cập trên đám mây. Dịch vụ này giúp nhân viên truy cập tài nguyên bên ngoài như Microsoft 365, Azure portal và hàng nghìn ứng dụng SaaS khác.',
        '• Azure Network gateway: Azure VPN Gateway nối mạng tại chỗ của bạn với Azure qua VPN Site-to-Site, tương tự cách bạn thiết lập và kết nối tới một văn phòng chi nhánh từ xa.',
        '• Azure Key Vault: là dịch vụ đám mây cung cấp kho lưu trữ an toàn cho secret. Bạn lưu được key, mật khẩu, chứng chỉ và các secret khác một cách an toàn.',
      ],
    ],
  },

  28: {
    q: [
      'Môi trường Azure của bạn có nhiều máy ảo. Bạn cần bảo đảm một máy ảo tên VM1 truy cập được',
      'từ Internet qua HTTP.',
      'Giải pháp: Bạn sửa một network security group (NSG). Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  29: {
    q: [
      'Môi trường Azure của bạn có nhiều máy ảo. Bạn cần bảo đảm một máy ảo tên VM1 truy cập được',
      'từ Internet qua HTTP.',
      'Giải pháp: Bạn sửa một DDoS protection plan. Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  30: {
    q: [
      'Môi trường Azure của bạn có nhiều máy ảo. Bạn cần bảo đảm một máy ảo tên VM1 truy cập được',
      'từ Internet qua HTTP.',
      'Giải pháp: Bạn sửa một Azure firewall. Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  31: {
    q: [
      'Môi trường Azure của bạn có nhiều máy ảo. Bạn cần bảo đảm một máy ảo tên VM1 truy cập được',
      'từ Internet qua HTTP.',
      'Giải pháp: Bạn sửa một Azure Traffic Manager profile. Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  32: {
    q: [
      'Một tổ chức đặt hạ tầng của mình trong một private cloud có thể đóng cửa datacenter của họ.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: [
      'Không cần thay đổi gì.',
      'trong một hybrid cloud',
      'trong public cloud',
      'trên một máy chủ Hyper-V',
    ],
    e: [
      [
        'Private cloud đặt ngay trong datacenter của bạn. Vì vậy bạn không thể đóng cửa datacenter nếu đang dùng private cloud.',
        'Public cloud đặt ở bên ngoài, ví dụ trên Microsoft Azure. Một tổ chức đặt hạ tầng của mình trong public cloud thì đóng cửa được datacenter.',
      ],
    ],
  },

  33: {
    q: [
      'Hai đặc điểm nào là của public cloud? Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    o: [
      'phần cứng dùng riêng',
      'kết nối không được bảo mật',
      'dung lượng lưu trữ hạn chế',
      'tính tiền theo mức dùng (metered pricing)',
      'tự phục vụ, tự quản lý (self-service management)',
    ],
  },

  34: {
    q: ['Bạn có thể tạo Group Policy trong Azure Active Directory (Azure AD).'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  35: {
    q: ['Bạn có thể join thiết bị Windows 10 vào Azure Active Directory (Azure AD).'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  36: {
    q: ['Bạn có thể join thiết bị Android vào Azure Active Directory (Azure AD).'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  37: {
    q: [
      'Công ty bạn dự định chuyển toàn bộ dữ liệu và tài nguyên lên Azure. Kế hoạch chuyển đổi của công ty',
      'nêu rõ chỉ được dùng giải pháp Platform as a Service (PaaS) trên Azure. Bạn cần triển khai một môi trường',
      'Azure đáp ứng kế hoạch chuyển đổi đó.',
      'Giải pháp: Bạn tạo một Azure App Service và các Azure SQL database. Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  38: {
    q: [
      'Công ty bạn dự định chuyển toàn bộ dữ liệu và tài nguyên lên Azure. Kế hoạch chuyển đổi của công ty',
      'nêu rõ chỉ được dùng giải pháp Platform as a Service (PaaS) trên Azure. Bạn cần triển khai một môi trường',
      'Azure đáp ứng kế hoạch chuyển đổi đó.',
      'Giải pháp: Bạn tạo một Azure App Service và các máy ảo Azure có cài Microsoft SQL Server.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  39: {
    q: [
      'Công ty bạn dự định chuyển toàn bộ dữ liệu và tài nguyên lên Azure. Kế hoạch chuyển đổi của công ty',
      'nêu rõ chỉ được dùng giải pháp Platform as a Service (PaaS) trên Azure. Bạn cần triển khai một môi trường',
      'Azure đáp ứng kế hoạch chuyển đổi đó.',
      'Giải pháp: Bạn tạo một Azure App Service và các Azure Storage account. Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  40: {
    q: [
      'Công ty bạn dự định chuyển toàn bộ dữ liệu và tài nguyên lên Azure. Kế hoạch chuyển đổi của công ty',
      'nêu rõ chỉ được dùng giải pháp Platform as a Service (PaaS) trên Azure. Bạn cần triển khai một môi trường',
      'Azure đáp ứng kế hoạch chuyển đổi của công ty. Bạn nên tạo gì?',
    ],
    o: [
      'Các máy ảo Azure, Azure SQL database và Azure Storage account.',
      'Một Azure App Service và các máy ảo Azure có cài Microsoft SQL Server.',
      'Một Azure App Service và các Azure SQL database.',
      'Các Azure storage account và web server chạy trên máy ảo Azure.',
    ],
  },
};
