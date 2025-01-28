services.AddCors(options =>
		 {
			     options.AddPolicy("AllowAllOrigins",
					               builder => builder.AllowAnyOrigin()
						                                 .AllowAnyMethod()
										                           .AllowAnyHeader());
		 });
