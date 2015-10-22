require_relative './rectangle.rb'
require_relative '../modules/document_module.rb'

class Square < Rectangle

  include Document

  def initialize width
    super(width, width)
  end

  
end
